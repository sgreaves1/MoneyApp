FROM node:carbon

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where availible (npm@5+)
COPY package.json ./app
RUN npm install
COPY . /app
CMD node server.js



#RUN npm install express

# If you are building your code for production
# RUN npm install --only=production

EXPOSE 3000

#CMD ["npm", "start"]