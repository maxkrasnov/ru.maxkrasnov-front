#указываем образ, который нужно установить,
FROM node:10

#указываем рабочую папку для проекта
WORKDIR /app

#копируем из корня проекта в папку /app
COPY . .

#запускаем установку зависимостей
RUN rm -f package-lock.json && npm install
RUN npm rebuild node-sass --force
