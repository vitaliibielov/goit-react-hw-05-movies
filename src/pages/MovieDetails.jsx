import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'service/Api';



export const MovieDetails = () => {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();
    useEffect(()=>{
        getMovieById(movieId).then(data => setMovie(data))
    },[movieId])

    if(!movie) return;
    
    const backLinkHref = location.state?.from ?? '/';

    return (
        <>
        <Link to={backLinkHref}>Go Back</Link>
        <div >
        <img
          
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt=""
        />
        <div >
          <h2 >
            {movie.title} (
            {new Date(movie.release_date).getFullYear()})
          </h2>
          <p >
            User Score: {Math.round(movie.vote_average * 10)} %
          </p>
          <h3 >Overview</h3>
          <p >{movie.overview}</p>
          <h3 >Genres</h3>
          {movie.genres &&
            movie.genres.map(genre => genre.name).join(', ')}
        </div>
      </div>
      <div>
        <h3 >Additional information</h3>
        <ul>
          <li >
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li >
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
    ) 
}