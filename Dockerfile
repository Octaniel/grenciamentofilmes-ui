#Create the node stage
FROM node:14.19.1 as node-14-build
#Set the working directory
WORKDIR /app
#Copy frthe from the current directory to working directory
COPY . .
#Run npm install & build the application
RUN npm install && npm run ng build --prod
#Create the nginx stage for the serving the content
FROM nginx:alpine as angular-nginx-prod-stage
#Set the working directory to nginx assets directory
WORKDIR /usr/share/nginx/html
#Remove the default nginx static files
RUN rm -rf ./*
#Copy the static content from builder stage
COPY --from=node-14-build /app/dist/efatura-ui .
#Container run the nginx with global directive and Daemon off
ENTRYPOINT [ "nginx", "-g", "daemon off;"]
