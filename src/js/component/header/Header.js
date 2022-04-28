import { Nav } from "./Nav"
import { useMovies } from "../../hooks/useMovies"
import { useDispatch } from "react-redux"
import { addItem } from "../../store/actions/playlist"
export const Header = () => {

    const movies = useMovies()
  
    const dispatch = useDispatch()
    movies.map((movie) => {
      dispatch(addItem({movie, isFavorite: false}))
    })

    return(
    <>
        <header className="header">   
        <Nav />
        </header>
    </>
)
}