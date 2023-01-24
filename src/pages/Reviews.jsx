import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "service/Api";


export const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    useEffect(()=>{
        if(!movieId) return;
        getMovieReviews(movieId).then(data => setMovieReviews(data))
    }, [movieId])
    return (
        <ul>
      {movieReviews.length !== 0 ? (
        movieReviews.map(review => (
          <li key={review.id}>
            <p>
              <span >Author: </span>
              {review.author}
            </p>
            <p > {review.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews</p>
      )}
    </ul>
    ) 
}