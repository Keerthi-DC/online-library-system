// src/pages/Browse.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllBooks, selectBooksByCategory } from '../store/booksSlice';
import BookCard from '../components/BookCard';
import './Browse.css';

const Browse = () => {
  const { category } = useParams();
  const allBooks = useSelector(selectAllBooks);
  const books = category ? useSelector(selectBooksByCategory(category)) : allBooks;

  const [search, setSearch] = useState('');

  const filtered = books.filter((book) => {
    const term = search.toLowerCase();
    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div className="browse-page">
      <h1>{category ? `${category} Books` : 'All Books'}</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="book-grid">
        {filtered.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      {filtered.length === 0 && <p>No books found.</p>}
    </div>
  );
};

export default Browse;
