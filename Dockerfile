FROM node:18.12.1-alpine

ENV TZ=Asia/Tokyo
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

CMD ["yarn", "dev"]
