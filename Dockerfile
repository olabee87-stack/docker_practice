# Specify a base image
FROM node:alpine

# Will copy all of the files into this directory and will not go into the rooot of the container
WORKDIR /usr/app

# Copy only the package.json before running the npm install - if anything changes within the file
COPY ./package.json ./

# Install some dependencies (this will ONLY run if there are changes to the package.json - above)
RUN npm install

# Copy all other files from the current local directory to the working directory of the container
COPY ./ ./

# Default command to run on starting the server
CMD ["npm", "start"]