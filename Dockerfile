FROM node:lastest

WORKDIR /api

COPY . .

RUN rm -rf node_modules

RUN rm -rf .gitignore

RUN npm install

CMD ["node", "src/index.js"]

EXPOSE 3000