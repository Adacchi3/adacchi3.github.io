FROM node:14.16.1-alpine

WORKDIR /app

ADD package.json /app
ADD yarn.lock /app

RUN yarn install

ADD . /app

CMD ["yarn", "dev"]
