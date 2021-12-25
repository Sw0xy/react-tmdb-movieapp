import { useNavigate ,useParams} from 'react-router-dom'
function MovieCard (props) {
const navigate = useNavigate();
const { id } = useParams();
  return props.movieList
  .filter((movie) => movie.title.toLowerCase().includes(props.search.toLowerCase()))
    .map((movie,index) => {
      return (
        <div key={index} className="movie" onClick={() => {
          const id = movie.id
          navigate(`movie/${id}`)
        }}>
          <img className="movie-img" src={'https://image.tmdb.org/t/p/original/'+ movie.poster_path} alt="" />
            <div className="movie-info">
              <h4 className="movie-title" >{movie.title}</h4>
              <p className="movie-vote">{movie.vote_average}</p>

            </div>
        </div>
      );
    });
}
export default MovieCard;
