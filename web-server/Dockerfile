FROM node:14-alpine
ENV NODE_ENV=production

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY index.js ./
COPY webpage.html ./

RUN npm install

EXPOSE 9001

CMD ["npm", "run", "start"]