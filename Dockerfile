FROM node

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y redis
RUN npm install

EXPOSE 3053

CMD nohup redis-server & npm start