FROM node:alpine

WORKDIR /usr/src/app

RUN apk add make git

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --silent && mv node_modules ../

ENTRYPOINT npm test