FROM node:slim

LABEL jfurbe <jfurbe@gmail.com>

WORKDIR /app

#copy code, install npm dependencies

COPY index.js /app/index.js
COPY package.json /app/package.json
RUN npm install