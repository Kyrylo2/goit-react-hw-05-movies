// import React, { Suspense } from 'react';
import AppBar from 'components/AppBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

// import Spinner from './Spinner';
// import Home from '../Home';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../../pages/Cast'));
const Reviews = lazy(() => import('../../pages/Reviews'));

export default function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<AppBar />}></Route>
    // </Routes>
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies fromHomeProp={true} />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          {/* <Route path="movies/:movieId/" element={<MovieDetails />}> 
          <Route path="reviews" element={<Reviews />} />*/}
          {/* </Route> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <ToastContainer theme="dark" newestOnTop />
    </>
  );
}
