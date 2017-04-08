FROM node

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 3000
VOLUME ["/app/public", "/app/node-modules"]

CMD ["node", "server"]
