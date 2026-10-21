require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

const connectDB = async() => {
    try {
        const client = await pool.connect();
        console.log("Ma'lumotlar bazasiga muvaffaqiyatli ulandi!");
        client.release();
    } catch (error) {
        console.error("Baza bilan ulanishda xatolik:", error.message);
    }
};

module.exports = { pool, connectDB };