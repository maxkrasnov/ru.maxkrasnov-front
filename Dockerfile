FROM node:8

WORKDIR /app

COPY . .
RUN npm install
