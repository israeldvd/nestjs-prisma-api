FROM node:lts-alpine AS development

# create app directory
WORKDIR /p0037/src/app

# Copy application dependency packages to the container image
# ensuring this executes only before installing everything, for caching
# the wildcard identifies both package.json and package-lock.json files
COPY package*.json ./

# Install app dependencies using this command (use npm ci for production)
# that comes before lifting up the API
RUN npm install

# Bundle app source
COPY . .

# Generate Prisma database client code
RUN npm run prisma:generate

# Expose the app process' port
EXPOSE 3000

# The command to finnaly be run
CMD ["npm", "run", "start:dev"]
