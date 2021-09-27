FROM node

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y redis
RUN npm install

EXPOSE 3053

CMD redis-server & npm start