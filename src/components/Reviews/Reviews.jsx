import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Reviews.module.css';

const API_KEY = '4315a3747153818fe39eb54a50eb0402';

function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
      )
      .then(response => {
        setLoading(false);
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching movie reviews:', error);
      });
  }, [movieId]);

  return (
    <div className={styles.ContainerReviews}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className={styles.ReviewsList}>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};

export default Reviews;
