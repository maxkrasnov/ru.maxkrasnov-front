#указываем образ, который нужно установить,
FROM node:10

#указываем рабочую папку для проекта
WORKDIR /app

#копируем из корня проекта в папку /app
COPY . .

#запускаем установку зависимостей
RUN npm install
RUN npm rebuild node-sass --force
