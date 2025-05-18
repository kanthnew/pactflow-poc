

class BooksService{
    books:any[]
    currentId:number
    constructor(){
        this.books = [{
            id: 1,
            name: "test",
            author:"test author"
        }]
        this.currentId = 0
    }

    addBook(book:any){
        const { name, author } = book;
        if (!name || !author) {
            throw Error('Missing required fields: name, author' )
        }
        const newBook = { id: this.currentId++, name, author };
        this.books.push(newBook);
        return newBook
    }

    updateBook(book:any){
        const { id, name, author } = book;

        if (!id || !name || !author) {
            throw Error('Missing required fields: name, author')
        }

        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            throw Error('Missing id')
        }

        this.books[index] = { id, name, author };
        return this.books[index]
    }

    deleteBook(bookId:string){
        const id = parseInt(bookId, 10);
        const index = this.books.findIndex(book => book.id === id);

        if (index === -1) {
            return {
                errorCode: 404,
                message: `Bookd if not found ${bookId}`
            }
        }

        const deletedBook = this.books.splice(index, 1)[0];
        return deletedBook
    }


}

export default  new BooksService()