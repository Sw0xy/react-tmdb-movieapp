import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import MoviesPage from './Pages/MoviesPage';
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
 <Router>
   <Routes>
     <Route path="/" element={< HomePage/>} />
     <Route path="/movies" element={<MoviesPage />} />
     <Route path="/movie/:id" element={<MoviePage />} />
   </Routes>
 </Router>,
  document.getElementById('root')
);


reportWebVitals();