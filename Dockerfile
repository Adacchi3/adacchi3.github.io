FROM node:26.7.0-alpine

ENV TZ=Asia/Tokyo
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

CMD ["yarn", "dev"]
