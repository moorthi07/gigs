# Pull nginx base image
FROM nginx:latest

WORKDIR /usr/share/nginx/html/
RUN ls
# Create app directory
#RUN mkdir -p /www
#WORKDIR /var/www/html 

# Bundle app source
# COPY . /www
COPY . /usr/share/nginx/html/

# Log list
RUN ls
 

# Expost port 80
# EXPOSE 80

# Copy custom configuration file from the current directory
# COPY nginx.conf /etc/nginx/nginx.conf
 

# Start up nginx server
# CMD ["nginx"]


 
 
