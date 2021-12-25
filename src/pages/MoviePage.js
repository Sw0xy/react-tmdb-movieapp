import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoviePage(props) {
  const [movie, setMovie] = useState([]);
  const API_KEY = process.env.API_KEY
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .catch((err) => console.log(err));
      setMovie(data);
    };

    fetchMovies();
  }, []);
 
  return (
    <div className='movie-div'>
      <img
        className='movie-poster-img'
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt=''
      />

      <div className='movie-title-div'>
        <h1 className='movie-details-title'>{movie.title}</h1>
        <p className='movie-details-overview'>{movie.overview}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          
            <p className='movie-details-relasedate white light-text'>
              <p className='bold-text white'>Original Language</p>
              {movie.original_language}
            </p>
         

          <p className='movie-details-relasedate white light-text'>
            <p className='bold-text white'>Release Date</p>
            {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
