import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import styles from './MovieDetails.module.css';

const API_KEY = '4315a3747153818fe39eb54a50eb0402';
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

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

    if (!showCast) {
      setShowReviews(false);
    }
  };

  const handleToggleReviews = () => {
    setShowReviews(prevState => !prevState);

    if (!showReviews) {
      setShowCast(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  const votePercentage = movieDetails.vote_average * 10;

  return (
    <div>
      <div className={styles.MovieContainer}>
        <div className={styles.MoviePoster}>
          {movieDetails.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}
        </div>
        <div className={styles.MovieDetail}>
          <h2 className={styles.MovieTitle}>
            {movieDetails.title} ({movieDetails.release_date.substring(0, 4)})
          </h2>
          <h5>User Score: {votePercentage}%</h5>
          <h4>Overview:</h4>
          <h5> {movieDetails.overview}</h5>

          <h4>Genres:</h4>
          <h5> {movieDetails.genres.map(genre => genre.name).join(', ')}</h5>
        </div>
      </div>
      <div className={styles.BtnContainer}>
        <h4 className={styles.Extras}>Additional information</h4>
        <button className={styles.CastBtn} onClick={handleToggleCast}>
          {showCast ? 'Cast' : 'Cast'}
        </button>
        <button className={styles.ReviewsBtn} onClick={handleToggleReviews}>
          {showReviews ? 'Reviews' : 'Reviews'}
        </button>
      </div>
      <div>
        {showCast && (
          <div>
            <Suspense fallback={<div>Loading Cast...</div>}>
              <Cast movieId={movieId} />
            </Suspense>
          </div>
        )}

        {showReviews && (
          <div>
            <Suspense fallback={<div>Loading Reviews...</div>}>
              <Reviews movieId={movieId} />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}
MovieDetails.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetails;
