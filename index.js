require('dotenv').config();
const path = require('path');

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/news', async (req, res) => {
    try {
        const news = await prisma.news.findMany({ take: 10, orderBy: { createdAt: 'desc' } });
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: 'Помилка сервера' });
    }
});

app.get('/api/gallery', async (req, res) => {
    try {
        const gallery = await prisma.gallery.findMany();
        res.json(gallery);
    } catch (error) {
        res.status(500).json({ error: 'Помилка сервера' });
    }
});

app.post('/api/contacts', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'Всі поля обовʼязкові' });
    try {
        await prisma.contactMessage.create({ data: { name, email, message } });
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Помилка сервера' });
    }
});

app.listen(PORT, () => console.log(`Сервер працює на http://localhost:${PORT}`));