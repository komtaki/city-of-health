FROM node:18-alpine

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

COPY package.json package-lock.json ./

RUN npm ci

COPY ./ .

ENTRYPOINT [ "npm", "run", "dev"]
