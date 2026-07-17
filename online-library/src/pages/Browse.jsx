import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectAllBooks,
  selectBooksByCategory,
} from "../store/booksSlice";
import BookCard from "../components/BookCard";
import "./Browse.css";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const Browse = () => {
  const { category } = useParams();

  const allBooks = useSelector(selectAllBooks);

  // Determine which books to display. If a category is present we filter the full list.
  const books = category ? allBooks.filter((b) => b.category === category) : allBooks;

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const term = search.toLowerCase();

    return (
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term)
    );
  });

  return (
    <div className="browse-page">
      <h1 style={{marginTop: "20px"}}>{category ? `${category} Books` : "All Books"}</h1>

      <div className="category-cards">
        <Link to="/books" className="category-card">
          All
        </Link>

        {categories.map((cat) => (
          <Link
            key={cat}
            to={`/books/${cat}`}
            className={`category-card ${
              category === cat ? "active-category" : ""
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="no-books">No books found.</p>
      )}
    </div>
  );
};

export default Browse;