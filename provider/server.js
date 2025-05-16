const express = require('express');
const app = express();
const PORT = process.env.PROVIDER_PORT;

app.use(express.json());

let books = [];
let currentId = 1;

// PUT /book — Add a new book
app.put('/book', (req, res) => {
    const { name, author } = req.body;

    if (!name || !author) {
        return res.status(400).json({ error: 'Missing required fields: name, author' });
    }

    const newBook = { id: currentId++, name, author };
    books.push(newBook);

    res.status(201).json(newBook);
});

// POST /book — Update an existing book (by ID in body)
app.post('/book', (req, res) => {
    const { id, name, author } = req.body;

    if (!id || !name || !author) {
        return res.status(400).json({ error: 'Missing fields: id, name, or author' });
    }

    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    books[index] = { id, name, author };
    res.status(200).json(books[index]);
});

// DELETE /book/:id
app.delete('/book/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = books.findIndex(book => book.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }

    const deletedBook = books.splice(index, 1)[0];
    res.status(200).json(deletedBook);
});

// GET /books — Get all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});

app.listen(PORT, () => {
    console.log(`Book API server running at http://localhost:${PORT}`);
});