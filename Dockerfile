# ЭТАП 1: Сборка (Build)
FROM node:20-alpine as builder

# Рабочая директория
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем исходный код
COPY . .

# Собираем проект (появится папка dist)
RUN npm run build

# ЭТАП 2: Сервер (Nginx)
FROM nginx:alpine

# Удаляем дефолтный конфиг nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем наш конфиг nginx (создадим его ниже)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы из этапа builder в папку nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем 80 порт
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
