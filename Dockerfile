# Specify a base image
FROM node:alpine
WORKDIR /usr/app

# Install some dependencies

RUN npm install


# Default command to run on starting the server
CMD ["npm", "start"]