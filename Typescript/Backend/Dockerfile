FROM node:lts-alpine3.20

WORKDIR /app-backend

COPY package* .

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "run" ]
CMD ["dev"]
