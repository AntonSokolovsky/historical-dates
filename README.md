# Historical Dates

Проект для отображения исторических дат с анимациями и слайдерами.

## Демо

https://imaginative-empanada-e133b1.netlify.app/

## Требования

- Node.js >= 18.0.0
- npm >= 9.0.0

## Установка

1. Клонируйте репозиторий:

   git clone https://github.com/AntonSokolovsky/historical-dates.git

2. Перейдите в директорию проекта:

cd historical-dates

3. Установите зависимости:

npm install

## Запуск проекта

Режим разработки

npm start
Проект будет доступен по адресу: http://localhost:3000.

## Сборка проекта

npm run build
Собранные файлы будут находиться в папке dist.

Линтинг и форматирование
Проверка кода:

npm run lint
Автоматическое исправление ошибок:

npm run lint:fix
Форматирование кода:

npm run format:fix

## Настройка pre-commit хуков

Для автоматического запуска линтинга и форматирования перед коммитом выполните:

npm run prepare

## Используемые технологии

React (v19)

TypeScript

Styled Components

GSAP (для анимаций)

Swiper (для слайдеров)

Webpack (для сборки)

ESLint и Prettier (для линтинга и форматирования)
