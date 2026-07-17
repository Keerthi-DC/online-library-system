import { NavLink } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  const { id, title, author, rating, category } = book;

  return (
    <div className="book-card">
      <div className="book-cover">
        <div className="book-category">{category}</div>

        <div className="book-content">
          <h3 className="book-title">{title}</h3>

          <div className="book-details">
            <p className="book-author">
              <strong>Author:</strong> {author}
            </p>

            <p className="book-rating">
              ⭐ {rating} / 5
            </p>
          </div>
        </div>
      </div>

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