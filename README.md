# Books API

Node.js, Express va PostgreSQL bilan yozilgan oddiy CRUD loyiha (Create va Read).

## O'rnatish
1. `npm install`
2. pgAdmin'da `backend_task` bazasini yarating va `database.sql` ni ishga tushiring
3. `.env.example` dan nusxa olib `.env` yarating va parolni yozing
4. `npm start`

## APIgit 
| Metod | Manzil | Tavsif |
|---|---|---|
| POST | /api/books | Yangi kitob qo'shish (201) |
| GET | /api/books | Barcha kitoblar (200) |
| GET | /api/books/:id | Bitta kitob (200 yoki 404) |
