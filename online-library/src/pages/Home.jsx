// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';
import BookCard from '../components/BookCard';
import { useSelector } from 'react-redux';
import { selectAllBooks } from '../store/booksSlice';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

const Home = () => {
  const books = useSelector(selectAllBooks);
  const popularBooks = books.slice(0, 3); // show first three as popular

  return (
    <div className="home-page">
      <h1>Welcome to the Online Library</h1>
      <section className="categories">
        <h2>Book Categories</h2>
        <div className="category-cards">
          {categories.map((cat) => (
            <Link key={cat} to={`/books/${cat}`} className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>
      <section className="popular">
        <h2>Popular Books</h2>
        <div className="book-grid">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
