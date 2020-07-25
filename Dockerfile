FROM node:13.12.0-alpine

ARG REACT_APP_GOOGLE_API

WORKDIR /usr/app

ENV NODE_PATH=src
ENV REACT_APP_GOOGLE_API=$REACT_APP_GOOGLE_API
ENV PATH=/usr/app/node_modules/.bin:$PATH

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]