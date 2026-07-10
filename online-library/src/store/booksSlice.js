// src/store/booksSlice.js
import { createSlice } from '@reduxjs/toolkit';
import booksData from '../data/books.json';

const initialState = {
  books: booksData,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Insert new book at beginning of array
      state.books.unshift(action.payload);
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { addBook, setBooks } = booksSlice.actions;

// Selectors
export const selectAllBooks = (state) => state.books.books;
export const selectBooksByCategory = (category) => (state) =>
  state.books.books.filter((book) => book.category.toLowerCase() === category.toLowerCase());
export const selectBookById = (id) => (state) =>
  state.books.books.find((book) => book.id === id);

export default booksSlice.reducer;
