FROM node:22.14.0

WORKDIR /api

COPY package*.json prisma ./

RUN npm install

RUN npx prisma generate

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]
