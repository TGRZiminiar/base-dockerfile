FROM node:20-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV production

ARG DOCKERPORT
ENV DOCKERPORT $DOCKERPORT

RUN npm run build

# COPY .env ./dist/

WORKDIR ./dist

CMD node server.js


# docker build --build-arg DOCKERPORT=your_desired_port -t my_app_image .
