FROM node:lts-alpine AS development

# create app directory
WORKDIR /p0037/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install app dependencies using this command (use npm ci for production)
RUN npm install

# Bundle app source
COPY . .

# Generate Prisma database client code
RUN npm run prisma:generate

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
