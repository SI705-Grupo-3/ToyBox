#Primera Etapa
FROM node:16-alpine3.13 as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/toybox /usr/share/nginx/html
