// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="notfound-page">
    <h1>404 - Page Not Found</h1>
    <p>The URL you entered does not exist.</p>
    <Link to="/" className="home-link">
      Go back to Home
    </Link>
  </div>
);

export default NotFound;
