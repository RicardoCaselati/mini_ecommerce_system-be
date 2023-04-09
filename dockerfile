FROM node:16-alpine

RUN npm i -g @nestjs/cli

WORKDIR /app

COPY package*.json ./

RUN ["npm", "i"] 

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]