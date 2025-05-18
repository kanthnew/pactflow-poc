import { addBook, updateBook, deleteBook, getBooks } from './bookServiceClient';


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

    async addBook(book:any){
        const newBook = await addBook(book);
        return newBook
    }

    async updateBook(book:any){
        const updatedBook = await updateBook(book);
        return updatedBook
    }

    async deleteBook(bookId:string){
        const deleted = await deleteBook(parseInt(bookId));
        return deleted
    }

    async getBooks(){
        return await getBooks()
    }


}

export default  new BooksService()