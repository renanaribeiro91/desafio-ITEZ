 FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install  --production
RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

COPY . .

EXPOSE 3000

CMD ["yarn","run","build"]