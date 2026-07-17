import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllBooks } from "../store/booksSlice";
import BookCard from "../components/BookCard";
import "./Home.css";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const Home = () => {
  const books = useSelector(selectAllBooks);

  const popularBooks = books.slice(0, 3);

  return (
    <div className="home-page">
      <h1 style={{marginTop:"20px"}}>Welcome to the Online Library</h1>

      <section className="categories">
        <h2 style={{marginBottom:"20px"}}>Book Categories</h2>

        <div className="category-cards">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="category-card"
            >
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

      <section className="view-all">
        <Link to="/books" className="view-all-btn">
          View All Books →
        </Link>
      </section>
    </div>
  );
};

export default Home;