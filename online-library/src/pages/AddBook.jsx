// src/pages/AddBook.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = 'Title required';
    if (!form.author.trim()) errs.author = 'Author required';
    if (!form.category.trim()) errs.category = 'Category required';
    if (!form.description.trim()) errs.description = 'Description required';
    const ratingNum = Number(form.rating);
    if (!form.rating || isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      errs.rating = 'Rating must be a number between 1 and 5';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    const newBook = {
      ...form,
      id: Date.now().toString(),
      rating: Number(form.rating)
    };
    dispatch(addBook(newBook));
    navigate('/books');
  };

  return (
    <div className="addbook-page">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="addbook-form">
        <label>
          Title
          <input name="title" value={form.title} onChange={handleChange} />
          {errors.title && <span className="error">{errors.title}</span>}
        </label>
        <label>
          Author
          <input name="author" value={form.author} onChange={handleChange} />
          {errors.author && <span className="error">{errors.author}</span>}
        </label>
        <label>
          Category
          <input name="category" value={form.category} onChange={handleChange} />
          {errors.category && <span className="error">{errors.category}</span>}
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={handleChange} />
          {errors.description && <span className="error">{errors.description}</span>}
        </label>
        <label>
          Rating (1-5)
          <input name="rating" value={form.rating} onChange={handleChange} />
          {errors.rating && <span className="error">{errors.rating}</span>}
        </label>
        <button type="submit" className="submit-btn">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
