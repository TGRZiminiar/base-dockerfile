# syntax=docker/dockerfile:1.5

FROM node:20-bullseye AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

COPY . .

ARG DOCKERPORT
ENV DOCKERPORT $DOCKERPORT

RUN npm run build

# Use separate stage for deployable image
FROM nginxinc/nginx-unprivileged:1.23-alpine-perl

COPY --link default.conf /etc/nginx/conf.d/default.conf

COPY --link --from=build usr/src/app/dist/ /usr/share/nginx/html

EXPOSE $DOCKERPORT

# # docker build --build-arg DOCKERPORT=your_desired_port -t my_app_image .
