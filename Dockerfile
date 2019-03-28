FROM maven:3.5-jdk-10

RUN mkdir -p /usr/swaggerjar/
WORKDIR /usr/swaggerjar/

RUN apt-get update && \
    apt-get -y install curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_11.x  | bash - && \
    apt-get -y install nodejs && \
    apt-get -y install jq

RUN wget http://central.maven.org/maven2/org/openapitools/openapi-generator-cli/3.3.4/openapi-generator-cli-3.3.4.jar -O openapi-generator-cli.jar

ADD .openapi-generator-ignore .
ADD generate.sh .

ENTRYPOINT [ "/bin/bash", "generate.sh" ]