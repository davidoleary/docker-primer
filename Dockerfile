FROM node:10.13.0-alpine AS dev
WORKDIR /app
ENV NODE_ENV development
COPY . /app

RUN npm install

EXPOSE 3456
EXPOSE 9229

CMD ["npm", "start"]