FROM node:22.2.0-alpine3.20

WORKDIR /app-backend

COPY package* .

RUN yarn install

COPY . .

ENTRYPOINT ["yarn", "run" ]
CMD ["dev"]