"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PROVIDER_PORT;
app.use(express_1.default.json());
const bookService = require('./services/booksService');
// PUT /book — Add a new book
app.put('/book', (req, res) => {
    const bookeAdded = bookService.addBook(req.body);
    res.status(201).json(bookeAdded);
});
// POST /book — Update an existing book (by ID in body)
app.post('/book', (req, res) => {
    const bookUpdated = bookService.updateBook(req.body);
    res.status(200).json(bookUpdated);
});
// DELETE /book/:id
app.delete('/book/:id', (req, res) => {
    const deletedBook = bookService.deletedBook(req.params.id);
    res.status(200).json(deletedBook);
});
// GET /books — Get all books
app.get('/books', (req, res) => {
    res.status(200).json(bookService.books);
});
app.listen(PORT, () => {
    console.log(`Book API server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map