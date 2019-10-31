FROM node:8.7.0-alpine

# install dependencies
# RUN mkdir -p /srv/app/tradefinance-server
# WORKDIR /srv/app/tradefinance-server
# COPY dist ./
# #RUN npm buildProd
# RUN node server.js
# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step


# set application PORT and expose docker PORT, 80 is what Elastic Beanstalk expects

# CMD [ "npm", "run", "start" ]

FROM node:8.7.0-alpine

# #Create app directory

RUN mkdir -p /srv/app/server

WORKDIR /srv/app/server

COPY package.json /srv/app/server
COPY package-lock.json /srv/app/server

RUN npm install

COPY . /srv/app/server
EXPOSE 8000

CMD ["npm", "start"]
#WORKDIR /srv/app/server/src/server

#CMD ["node", "server-prod.js"]

# Use a lighter version of Node as a parent image
# FROM buildpack-deps:jessie
# # Set the working directory to /api
# WORKDIR /api
# # copy package.json into the container at /api
# COPY package*.json /api/
# # install dependencies
# RUN npm install
# # Copy the current directory contents into the container at /api
# COPY . /api/
# # Make port 80 available to the world outside this container
# EXPOSE 80
# # Run the app when the container launches
# CMD ["npm", "start"]