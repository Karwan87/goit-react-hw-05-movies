import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from './Cast.module.css';

const API_KEY = '4315a3747153818fe39eb54a50eb0402';

function Cast({ movieId }) {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      )
      .then(response => {
        setLoading(false);
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching movie cast:', error);
      });
  }, [movieId]);

  return (
    <div className={styles.CastContainer}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {cast.map((actor, index) => (
            <li key={`${actor.id}-${index}`}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <div className={styles.NoImage}>
                  <p className={styles.TextNoImg}>No image</p>
                </div>
              )}
              <ul>
                <li className={styles.ActorName}>{actor.name}</li>
                <li className={styles.ActorCharacter}>
                  Character: {actor.character}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
