import express from 'express'
const app = express();
const PORT = process.env.CONSUMER_PORT;

app.use(express.json());



import bookService from './services/booksService';

// PUT /book — Add a new book
app.put('/book', async (req, res) => {
    const bookeAdded = await bookService.addBook(req.body)
    res.status(201).json(bookeAdded);
});

// POST /book — Update an existing book (by ID in body)
app.post('/book', async (req, res) => {
    const bookUpdated = await bookService.updateBook(req.body)
    res.status(200).json(bookUpdated);
});

// DELETE /book/:id
app.delete('/book/:id', async (req, res) => {
    const deletedBook = await bookService.deleteBook(req.params.id)
    if (deletedBook.errorCode){
        res.status(deletedBook.errorCode).json(deletedBook);
    }else{
        res.status(200).json(deletedBook);
    }
    
});

// GET /books — Get all books
app.get('/books', async (req, res) => {
    res.status(200).json(await bookService.getBooks());
});

app.listen(PORT, () => {
    console.log(`Book API server running at http://localhost:${PORT}`);
});