// src/pages/Details.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBookById } from '../store/booksSlice';
import './Details.css';

const Details = () => {
  const { id } = useParams();
  const book = useSelector(selectBookById(id));
  const navigate = useNavigate();

  if (!book) {
    return (
      <div className="details-page">
        <p>Book not found.</p>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating} / 5</p>
      <button onClick={() => navigate('/books')} className="back-btn">
        Back to Browse
      </button>
    </div>
  );
};

export default Details;
