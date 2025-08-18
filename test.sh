#!/bin/bash -e

cd sdk

npm install
npm run build
npm test