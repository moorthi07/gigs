# Pull nginx base image
FROM nginx:latest

# Create app directory
RUN mkdir -p /www
WORKDIR /www 

# Bundle app source
# COPY . /www
COPY index.html /www

# Log list
RUN ls
WORKDIR /www/html
RUN ls

# Expost port 80
# EXPOSE 80

# Copy custom configuration file from the current directory
# COPY nginx.conf /etc/nginx/nginx.conf
 

# Start up nginx server
# CMD ["nginx"]


 
 
