FROM node:16.14-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 3001

RUN ["npm", "i"] 

COPY . .

RUN chown node:node /app

USER node

CMD ["npm", "run", "start:dev"]