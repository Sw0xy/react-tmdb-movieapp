
import {useState,useEffect} from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchForm from '../components/SearchBox';
import '../components/style.css'
import axios from 'axios'
import * as FiIcons from "react-icons/fi";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
//import Navbar from './components/Sidebar';
//import TrendsPage from '../Pages/TrendsPage';
//import MoviesPage from './Pages/MoviesPage';


function HomePage(props) {
    
    const [search, setSearch] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const handleChange = (event) => setSearch(event.target.value);
    const [movieList, setMovieList] = useState([]);
    const API_KEY = process.env.API_KEY;
  
    const nextPage = (pageNumber) => {
      setPageNumber(pageNumber+1)
    }
    const prevPage = (pageNumber) => {
    
        setPageNumber(pageNumber-1)
    }
    
   
    useEffect(() => {
      const fetchMovies = async () =>{
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`).catch((err) => console.log(err))
        setMovieList(data.results)
        setPageNumber(data.page)
       
      }
      if (pageNumber === 0){
        setPageNumber(pageNumber+1)
      }
      else{
        fetchMovies()
      }    
    },[pageNumber]);

   
    return(
        <div>
            <SearchForm search={search} onSearchChange={handleChange} pageNumber={pageNumber} />
            
            <div className='movie-container'>
                    <MovieCard className='movie-cont' search={search} movieList={movieList}  />
            </div>
                
            <div className='buttons'>
                <button className='prev-button' onClick={() => prevPage(pageNumber)}><FiIcons.FiChevronLeft /> Prev Page </button>
                <button className='next-button' onClick={() => nextPage(pageNumber)}>Next Page <FiIcons.FiChevronRight /></button>
            </div>
        </div>
    )


}

export default HomePage;