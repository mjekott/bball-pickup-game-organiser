# pull official base image
FROM node:16.14.0

# set working directory
WORKDIR /opt/react

# add `/app/node_modules/.bin` to $PATH
ENV PATH /opt/react/node_modules/.bin:$PATH

# install app dependencies
COPY web/package*.json ./
RUN npm install --include=dev;

# add app
COPY web/ ./

# start app
CMD ["npm", "start"]
