FROM node:16.14
WORKDIR /home/node/app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 3001