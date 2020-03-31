FROM node:alpine3.10

WORKDIR /usr/src/smart-brain-api

COPY ./ ./

RUN npm install

CMD ["sh"]