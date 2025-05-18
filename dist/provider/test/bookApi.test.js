const axios = require('axios');
const { expect } = require('chai');
// import {expect} from 'chai'
// const expect 
const api = axios.create({
    baseURL: 'http://localhost:9000',
    validateStatus: () => true, // prevent Axios from throwing on HTTP error status codes
});
describe('Book API', () => {
    let createdBook;
    it('should create a new book (PUT /book)', async () => {
        const response = await api.put('/book', {
            name: 'Test Book',
            author: 'Test Author',
        });
        expect(response.status).to.equal(201);
        expect(response.data).to.include({ name: 'Test Book', author: 'Test Author' });
        expect(response.data).to.have.property('id');
        createdBook = response.data;
    });
    it('should update the book (POST /book)', async () => {
        const updatedData = {
            id: 1,
            name: 'Updated Book',
            author: 'Updated Author',
        };
        const response = await api.post('/book', updatedData);
        expect(response.status).to.equal(200);
        expect(response.data).to.deep.equal(updatedData);
    });
    it('should list all books (GET /books)', async () => {
        const response = await api.get('/books');
        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('array');
        expect(response.data.some(b => b.id === createdBook.id)).to.be.true;
    });
    it('should delete the book (DELETE /book/:id)', async () => {
        const response = await api.delete(`/book/${createdBook.id}`);
        expect(response.status).to.equal(200);
        expect(response.data.id).to.equal(createdBook.id);
    });
    it('should return 404 for deleted book (DELETE again)', async () => {
        const response = await api.delete(`/book/1`);
        expect(response.status).to.equal(404);
    });
});
//# sourceMappingURL=bookApi.test.js.map