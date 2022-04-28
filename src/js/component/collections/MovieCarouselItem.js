import { Link } from "react-router-dom"
import { RiHeartAddFill } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { addPlaylist, changeItem, removePlaylist } from "../../store/actions/playlist";

export const MovieCarouselItem = (item) =>  {

    const movie =  item.movie.movie
    
    const dispatch = useDispatch()
    const [favorite, setFavorite] = useState(item.movie.isFavorite);
    
    useEffect(()=> {
    })

    const handleFavorite = () => {
        dispatch(changeItem(movie))
        !favorite === true ? dispatch(addPlaylist({movie, isFavorite: !favorite})) : dispatch(removePlaylist(movie.id))      
       setFavorite(!favorite)
    }
    
    movie.poster_path = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
  
    return(
    <li className="movie-carousel__item" data-carousel="item">
    
            <Link  className="movie-carousel__link"  to={`/about/${movie.id}`}>
                <img className="movie-carousel__cover" src={movie.poster_path} alt={movie.title} />
            </Link>
                <RiHeartAddFill onClick={handleFavorite}
                style={{

                    color: favorite === false ? "white" : "red" 
                }}
                className="movie-carousel-favorite_item"/>
      
    </li>

)}