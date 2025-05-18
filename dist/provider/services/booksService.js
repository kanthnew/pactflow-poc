"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BooksService {
    constructor() {
        this.books = [];
        this.currentId = 0;
    }
    addBook(book) {
        const { name, author } = book;
        if (!name || !author) {
            throw Error('Missing required fields: name, author');
        }
        const newBook = { id: this.currentId++, name, author };
        this.books.push(newBook);
        return newBook;
    }
    updateBook(book) {
        const { id, name, author } = book;
        if (!id || !name || !author) {
            throw Error('Missing required fields: name, author');
        }
        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            throw Error('Missing required fields: name, author');
        }
        this.books[index] = { id, name, author };
        return this.books[index];
    }
    deleteBook(bookId) {
        const id = parseInt(bookId, 10);
        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            throw Error('Missing required fields: name, author');
        }
        const deletedBook = this.books.splice(index, 1)[0];
        return deletedBook;
    }
}
exports.default = new BooksService();
//# sourceMappingURL=booksService.js.map