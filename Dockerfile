FROM node:latest

RUN mkdir -p /source/app

WORKDIR /source/app

COPY . /source/app

RUN npm install --only=production
RUN npm run seed



EXPOSE 3003

CMD [ "npm", "start" ]
