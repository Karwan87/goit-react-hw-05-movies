import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
    <div>
      <h2>Movie Cast</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
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
