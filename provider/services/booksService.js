

class BooksService{

    constructor(){
        this.books = []
        this.currentId = 0
    }

    addBook(book){
        const { name, author } = book;
        if (!name || !author) {
            return res.status(400).json({ error: 'Missing required fields: name, author' });
        }
        const newBook = { id: this.currentId++, name, author };
        this.books.push(newBook);
        return newBook
    }

    updateBook(book){
        const { id, name, author } = book;

        if (!id || !name || !author) {
            return res.status(400).json({ error: 'Missing fields: id, name, or author' });
        }

        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            return res.status(404).json({ error: 'Book not found' });
        }

        this.books[index] = { id, name, author };
        return this.books[index]
    }

    deleteBook(id){
        const id = parseInt(id, 10);
        const index = books.findIndex(book => book.id === id);

        if (index === -1) {
            return res.status(404).json({ error: 'Book not found' });
        }

        const deletedBook = books.splice(index, 1)[0];
        return deletedBook
    }


}

export default new BooksService()