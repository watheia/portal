FROM node:14-alpine as build

WORKDIR /workspace
ADD . .

RUN yarn && \
  yarn nx run home:build --parallel --prod
