import { Route, Routes } from 'react-router-dom';

import { Cast } from "pages/Cast";
import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import { Movies } from "pages/Movies";
import { Reviews } from "pages/Reviews";
import { SharedLayout } from "./SharedLayout/SharedLayout";



export const App = () => {
  return (
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
  );
};
