import axios from 'axios';

const BASE_URL = process.env.PROVIDER_URL || 'http://localhost:3000';

const client = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Add a new book
export const addBook = async (book: { name: string; author: string }) => {
    const response = await client.put('/book', book);
    return response.data;
};

// Update an existing book (must include id)
export const updateBook = async (book: { id: number; name: string; author: string }) => {
    const response = await client.post('/book', book);
    return response.data;
};

// Delete a book by id
export const deleteBook = async (id: number) => {
    const response = await client.delete(`/book/${id}`);
    return response.data;
};

// Get all books
export const getBooks = async () => {
    const response = await client.get('/books');
    return response.data;
};