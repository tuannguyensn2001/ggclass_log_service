FROM node:alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 4000
EXPOSE 50051

CMD ["yarn","start"]
