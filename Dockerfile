# build environment
FROM node:18 AS build
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY ./ ./
RUN npm run build

# production environmnt
FROM nginx:stable-alpine
COPY --from=build /app/build/ /usr/local/apache2/htdocs
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]