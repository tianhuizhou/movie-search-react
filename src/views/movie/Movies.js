import api from "../../helper/api";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";

const Movies = () => {
    const [movie_list, setMovies] = useState([])
    const loadMovies = async(query='batman', type='')=> {
        if (!query) return
        const res = await api.getMovies(query)
        console.log(res)
        setMovies(res.Search ?? [])
    }
    useEffect( ()=> {
        loadMovies('batman')
    }, [])
    return (
        <div className="w-full">
            <SearchBar handleSearch={loadMovies} />

            <div className="flex flex-wrap">
                {movie_list.length ?
                    movie_list.map((movie) => (
                    <MovieCard movie={movie} key={movie.imdbID}/>
                    ))
                    :
                    <div className="empty">
                        <h2>Movie Not Found</h2>
                    </div>
                }
            </div>
        </div>
    );
}

export default Movies