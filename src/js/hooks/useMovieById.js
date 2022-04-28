import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export const useMovieById = (id) => {
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const {data: data} = await MoviesService.getMoviesById(id)
        setMovies(data);
      };
    useEffect(()=> {
        getMovies();
        
    },[])
    
    return movies;
}