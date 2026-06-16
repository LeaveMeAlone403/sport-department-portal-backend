# Sport Department Portal — Backend

Серверна частина інформаційного порталу Кафедри фізичної культури і спорту ЗВО. Надає REST API для управління контентом сайту.

## 🌐 Мережеві локальні адреси (Порти)
* **Бекенд (REST API):** Running on `http://localhost:5000`
* **Фронтенд (для порівняння):** Running on `http://localhost:5173`

## 🔌 Ендпоінти REST API
* `GET http://localhost:5000/api/news` — Отримання списку 10 останніх новин.
* `GET http://localhost:5000/api/gallery` — Отримання медіафайлів для галереї.
* `POST http://localhost:5000/api/contacts` — Прийом даних форми зворотного зв'язку.

## 🛠 Стек технологій
* **Платформа:** Node.js
* **Фреймворк:** Express.js 
* **ORM:** Prisma
* **База даних:** SQLite

## 💻 Інсталяція та запуск
```bash
npm install
npx prisma generate
node index.js
