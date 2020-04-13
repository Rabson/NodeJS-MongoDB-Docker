FROM node

WORKDIR /usr/src/app

COPY package.json ./

COPY yarn.lock ./

RUN npm install

RUN npm install pm2 -g

COPY . .

EXPOSE 3000

CMD ["pm2-docker", "start", "process.json"]