import { useParams } from "react-router-dom";
import { useMovieById } from "../../hooks/useMovieById";
export const MovieAbout = () => {
    
    const movie = useMovieById(useParams().movieId)
  
    const url = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
    const urlBackground = "https://image.tmdb.org/t/p/w500/"+movie.backdrop_path
    const title = movie.title
    return (        
        <section>
                <div className="background-fixed"  >
                    <img src={urlBackground}></img>
                </div>
                <div className="conteiner-movie">
                    <div className="conteiner-movie__img"> 

                        <img className="conteiner-movie__link" src={url} alt={title} />
                   </div>
                   <div className="conteiner-movie__about">
                        <div className="conteiner-movie__title">
                            <span>{movie.title}</span>
                        </div>
                        <div className="conteiner-movie__subtitle">
                            <span>{movie.release_date}</span>
                            <span className="conteiner-movie__subtitle__leg"> ({movie.original_language})</span>        
                            <span> IMDb ({movie.vote_average}/10)</span> 
                        </div>
                        <div className="conteiner-movie__sinopse">
                            <span className="conteiner-movie__sinopseTitle">Sinopse</span>
                            <p className="conteiner-movie__sinopseContent">{movie.overview}</p>
                        </div>  
                  </div>
                </div>
                </section>    
)}