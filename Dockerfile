# Base image 
FROM node:22.11.0

# This sets our working directory of the container to /app 
WORKDIR /app

COPY package.json .
RUN npm install 

# ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "development"]; \
#         then npm install; \
#         else npm install --only=production; \
#         fi
COPY . ./

EXPOSE 5000
CMD ["npm", "start"]
