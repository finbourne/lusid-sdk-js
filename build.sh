#!/bin/bash

if [[ ${#1} -eq 0 ]]; then
    echo
    echo "[ERROR] url for swagger file not specified"
    exit 1
fi

get the specificed swagger file
curl -L $1 -o lusid.json

#   build the sdk
docker-compose up --build && docker-compose rm -f