const express = require('express');
const { pool, connectDB } = require('./db');

const app = express();
app.use(express.json());

app.post('/api/books', async(req, res) => {
    try {
        const { title, author, price } = req.body;

        if (!title || !author) {
            return res.status(400).json({ message: "title va author majburiy" });
        }

        const result = await pool.query(
            'INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *', [title, author, price]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
});
// Barcha kitoblar
app.get('/api/books', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books ORDER BY id');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
});

// ID bo'yicha bitta kitob
app.get('/api/books/:id', async(req, res) => {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id)) {
            return res.status(400).json({ message: "ID son bo'lishi kerak" });
        }

        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Kitob topilmadi" });
        }

        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Server xatosi", error: error.message });
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT}-portda ishlayapti`);
    connectDB();
});