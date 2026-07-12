// src/components/BookCard.jsx
import { NavLink } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { id, title, author, rating, category } = book;
  return (
    <div className="book-card">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">by {author}</p>
      <p className="book-rating">Rating: {rating} / 5</p>
      <NavLink
        to={`/books/${category}/${id}`}
        className="details-button"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default BookCard;
