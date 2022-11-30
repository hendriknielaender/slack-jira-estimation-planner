FROM node:18.12.0-alpine3.16

WORKDIR /app
ADD . .

RUN npm ci
RUN npm run build

ENV NODE_ENV production

CMD ["npm", "start"]
