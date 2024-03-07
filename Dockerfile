#FROM node:21.6.1-slim as builder
#WORKDIR /app
#COPY package.json .
#COPY package-lock.json .
#RUN npm install --save --legacy-peer-deps
#COPY . .
#RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
