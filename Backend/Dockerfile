FROM node:carbon

# Create app directory
WORKDIR /app

COPY package.json ./app
RUN npm install
RUN npm install nconf
COPY . /app
CMD node server.js

EXPOSE 4000

USER nobody

