import { NavLink } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  const { id, title, author, rating, category } = book;

  return (
    <div className="book-card">
      <p className="book-category">{category}</p>

      <h3 className="book-title">{title}</h3>

      <p className="book-author">
        <strong>Author:</strong> {author}
      </p>

      <p className="book-rating">
        <strong>Rating:</strong> {rating} / 5
      </p>

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