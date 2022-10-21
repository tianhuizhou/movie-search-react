import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import api from "../../helper/api";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const loadMovieById = async () => {
        const res = await api.getMovies(id, 'id')
        setMovie(res)
    }
    useEffect(() => {
        loadMovieById()
    }, [id])
    return (
        <div className="mt-5 w-full container grid grid-cols-2 gap-3 ">
            <div className="movie-details-poster">
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            </div>
            <div className="movie-details-content flex flex-col gap-y-10">
                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Title: </span>
                    <span className="text-2xl">{movie.Title} ({movie.Year})</span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Released: </span>
                    <span className="text-2xl">{movie.Released}</span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Category: </span>
                    <span className="text-2xl">{movie.Genre}</span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Director: </span>
                    <span className="text-2xl">{movie.Director}</span>
                </div>

                <div className="flex items-center">
                    <div className="font-bold text-4xl pr-4">Writer: </div>
                    <div className="text-2xl">{movie.Writer}</div>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Actors: </span>
                    <span className="text-2xl">{movie.Actors}</span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Language: </span>
                    <span className="text-2xl">{movie.Language}</span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Country: </span>
                    <span className="text-2xl">{movie.Country}</span>
                </div>

                <div className="flex items-center">
                    <span className="font-bold text-4xl pr-4">Awards: </span>
                    <span className="text-2xl">{movie.Awards}</span>
                </div>

                <div className="flex items-start">
                    <span className="font-bold text-4xl pr-4">Plot: </span>
                    <span className="text-2xl">{movie.Plot}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails