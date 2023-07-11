import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const API_KEY = '4315a3747153818fe39eb54a50eb0402';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => {
        setLoading(false);
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  const handleToggleCast = () => {
    setShowCast(prevState => !prevState);
  };
  const handleToggleReviews = () => {
    setShowReviews(prevState => !prevState);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  const votePercentage = movieDetails.vote_average * 10;

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Rating: {votePercentage}%</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      {movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}
      <Link to="#" onClick={handleToggleCast}>
        {showCast ? 'Hide Cast' : 'Show Cast'}
      </Link>
      {showCast && <Cast movieId={movieId} />}
      <Link to="#" onClick={handleToggleReviews}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </Link>
      {showReviews && <Reviews movieId={movieId} />}
    </div>
  );
}
MovieDetails.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetails;
