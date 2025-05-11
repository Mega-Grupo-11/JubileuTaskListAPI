FROM node:22.14.0

WORKDIR /api

COPY package*.json prisma ./

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm rebuild bcrypt --build-from-source

RUN npm run build

EXPOSE 5050

CMD ["npm", "start"]
