import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "service/Api";

export const Cast = () => {
    const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState(null);
  useEffect(()=>{
    if(!movieId) return;
    getMovieCredits(movieId).then(data => setMovieCast(data));
  }, [movieId])

    if(!movieCast) return;

    return (
        <ul>
      {movieCast.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://st2.depositphotos.com/1531183/5706/v/600/depositphotos_57064855-stock-illustration-unknown-person-silhouette-whith-red.jpg'
            }
            alt=""
          />
          <div>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
    ) 
}