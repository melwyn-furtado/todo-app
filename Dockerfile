FROM node:18
# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
# Install app dependencies
RUN npm install
CMD [ "node", "server.js" ]
