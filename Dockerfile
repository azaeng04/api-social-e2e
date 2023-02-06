
FROM node:18-alpine

WORKDIR /e2e/

RUN npm install -g pnpm

COPY . /e2e/

RUN pnpm install
