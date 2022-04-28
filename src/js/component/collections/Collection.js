import { useSelector } from "react-redux";
import { MovieCarouselItem } from "./MovieCarouselItem";

export const Collection = ({title}) => {
    
    const  {collectionMovies} = useSelector(({playlist}) => playlist)

    return(
    <div className="collection">
        <h3 className="collection__title">{title}</h3>
        <div className="movie-carousel">
        {/* <button class="arrow-slider arrow-slider--left" data-carousel="btn-previous"><AiOutlineLeft /></button>
            <button class="arrow-slider arrow-slider--right" data-carousel="btn-next"><AiOutlineRight /></button> */}
            <ul className="movie-carousel__list" data-carousel="list">
            { collectionMovies.map((movie,index) =>(
                        <MovieCarouselItem movie={movie} key={index}/>
                    ))}
            </ul>

    </div>
</div>
)}