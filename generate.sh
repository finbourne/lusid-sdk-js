#!/bin/bash -e

if [[ ${#1} -eq 0 ]]; then
    echo
    echo "[ERROR] swagger file not specified"
    exit 1
fi

gen_root=/usr/src
sdk_output_folder=$gen_root/sdk
swagger_file=$gen_root/$1
config_file=$gen_root/config.json

#   remove all previously generated files
shopt -s extglob
echo "removing previous sdk:"
rm -rf $sdk_output_folder/docs/
rm -rf $sdk_output_folder/src/
rm -rf $sdk_output_folder/test/api/
rm -rf $sdk_output_folder/test/model/
shopt -u extglob

# set version of the SDK
sdk_version=$(cat $swagger_file | jq -r '.info.version')
cat $config_file | jq -r --arg SDK_VERSION "$sdk_version" '.packageVersion |= $SDK_VERSION' > temp && mv temp $config_file

cp .openapi-generator-ignore $sdk_output_folder

echo "generating sdk"
java -jar /usr/swaggerjar/openapi-generator-cli.jar generate \
    -i $swagger_file \
    -g typescript-node \
    -o $sdk_output_folder \
    -c $config_file \
    --additional-properties supportsES6=true

# update package.json
cat $sdk_output_folder/package.json | jq -r --arg SDK_VERSION "$sdk_version" '.version |= $SDK_VERSION' > temp && mv temp $sdk_output_folder/package.json

cd $gen_root/sdk

# workarounds for known issue - https://github.com/OpenAPITools/openapi-generator/issues/1139
echo "import { InstrumentDefinition } from '../model/instrumentDefinition';" > api/_instrumentsApi.ts
cat api/instrumentsApi.ts >> api/_instrumentsApi.ts
rm api/instrumentsApi.ts
mv api/_instrumentsApi.ts api/instrumentsApi.ts
echo "import { PerpetualPropertyValue } from '../model/perpetualPropertyValue';" > api/_transactionPortfoliosApi.ts
cat api/transactionPortfoliosApi.ts >> api/_transactionPortfoliosApi.ts
rm api/transactionPortfoliosApi.ts
mv api/_transactionPortfoliosApi.ts api/transactionPortfoliosApi.ts
echo "import { PropertyValue } from '../model/propertyValue';" > api/_portfoliosApi.ts
cat api/portfoliosApi.ts >> api/_portfoliosApi.ts
rm api/portfoliosApi.ts
mv api/_portfoliosApi.ts api/portfoliosApi.ts
echo "export * from './client/client';" > _api.ts
cat api.ts >> _api.ts
rm api.ts
mv _api.ts api.ts

cd ..

rm -rf $sdk_output_folder/.openapi-generator/
rm -f $sdk_output_folder/.openapi-generator-ignore
rm -f $sdk_output_folder/README.md
rm -f $sdk_output_folder/.travis.yml
rm -f $sdk_output_folder/git_push.sh
