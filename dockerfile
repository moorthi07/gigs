FROM node:6.9

# Create app directory
RUN mkdir -p /pulic
WORKDIR /pulic
 

# Install app dependencies
COPY package.json /src/app/
 

# Bundle app source
COPY . /pulic

 

EXPOSE 8080
 
