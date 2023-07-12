import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Movies.module.css';

const API_KEY = '4315a3747153818fe39eb54a50eb0402';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      )
      .then(response => {
        setSearchResults(response.data.results);
      })
      .catch(error => {
        console.error('Error searching movies:', error);
      });
  };

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={styles.SearchContainer}>
      <h2 className={styles.SearchTitle}>Search Movies</h2>
      <div className={styles.FormContainer}>
        <input
          className={styles.SearchForm}
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search movies"
        />
        <button className={styles.SearchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              onClick={() => handleMovieClick(movie.id)}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

Movies.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
export default Movies;
