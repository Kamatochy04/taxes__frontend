FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install --verbose

COPY . .

EXPOSE 1437

CMD ["npm", "run", "dev"]