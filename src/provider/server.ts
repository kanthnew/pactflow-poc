import express from 'express'
const app = express();
const PORT = process.env.PROVIDER_PORT;

app.use(express.json());



import bookService from './services/booksService';

// PUT /book — Add a new book
app.put('/book', (req, res) => {
    const bookeAdded = bookService.addBook(req.body)
    res.status(201).json(bookeAdded);
});

// POST /book — Update an existing book (by ID in body)
app.post('/book', (req, res) => {
    const bookUpdated = bookService.updateBook(req.body)
    res.status(200).json(bookUpdated);
});

// DELETE /book/:id
app.delete('/book/:id', (req, res) => {
    const deletedBook = bookService.deleteBook(req.params.id)
    if (deletedBook.errorCode){
        res.status(deletedBook.errorCode).json(deletedBook);
    }else{
        res.status(200).json(deletedBook);
    }
    
});

// GET /books — Get all books
app.get('/books', (req, res) => {
    res.status(200).json(bookService.books);
});

app.listen(PORT, () => {
    console.log(`Book API server running at http://localhost:${PORT}`);
});