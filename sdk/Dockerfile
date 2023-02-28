FROM node:alpine

RUN apk add bash && apk add jq && apk add gnupg

WORKDIR /usr/src/

COPY package.json package.json

RUN npm install

ENTRYPOINT ["sh","-c", "npm install && npm run build && npm run test"]