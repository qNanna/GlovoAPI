FROM node

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y redis
RUN npm install

ENV HOST = 127.0.0.1
ENV PORT = 3053
ENV DISCOUNT = 20
ENV API_URL = https://api.glovoapp.com/
ENV API_KEY = Basic MTU5NDAyMTA1MDk2MzcyOjdjNDk3NWYyMDQ2OTQ1OWFiMDQ0ZGNmOTE0ZGFkMmE0
ENV JWT_TOKEN_KEY = 6BjRkLTwO6rg4KTp6638V0j2kKxnBpZI
ENV REDIS_DATA_LIFE_TIME = 10

EXPOSE 3053

CMD redis-server & npm start