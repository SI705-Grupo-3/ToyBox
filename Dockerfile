#Primera Etapa
FROM node:18.16-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.25.1-alpine
COPY --from=build-step /app/dist/toy-box /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
