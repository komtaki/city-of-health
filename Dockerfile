FROM node:16-alpine

RUN apk add --no-cache \
    sudo \
    curl \
    build-base \
    g++ \
    libpng \
    libpng-dev \
    jpeg-dev \
    pango-dev \
    cairo-dev \
    giflib-dev \
    python3

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY ./ .

ENTRYPOINT [ "yarn", "dev"]
