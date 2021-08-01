# Build the Image
FROM node:10 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install 
RUN npx next build && npx next export
 

# Serve via NGINX
FROM nginx:latest
WORKDIR /usr/share/nginx/html
# RUN rm -rf ./* # what is this for?
COPY --from=builder /app/out .

# copy nginx conf files
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx-page.conf /etc/nginx/conf.d/

# ENTRYPOINT ["nginx", "-g", "daemon off;"] # what is this for? (I think its used in lieu of docker run)