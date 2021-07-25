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
# RUN rm -rf ./*
COPY --from=builder /app/out .
# COPY /out /usr/share/nginx/html/
# ENTRYPOINT ["nginx", "-g", "daemon off;"]