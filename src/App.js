// import './assets/style/App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Movies = lazy(() => import('./views/movie/Movies'))
const MovieDetails = lazy(() => import('./views/movie/MovieDetails'))

const App = () => {
  return (
      <div className="app">
          <h1 className="move-page-header">Movie Search</h1>

          <main className="flex justify-center w-full">
              <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes className="container">
                        <Route path="/" element={<Movies />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                    </Routes>
                </Suspense>
              </Router>
          </main>
      </div>
  );
}

export default App;
