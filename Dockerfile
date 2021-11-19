# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache g++ make python3
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]