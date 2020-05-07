FROM node:alpine

RUN apk add make git

WORKDIR /usr/src/app