
import { ADD_ITEM , ADD_PLAYLIST, REMOVE_PLAYLIST, CHANGE_ITEM} from "../actions/playlist";


const initialState = {
    favorite: [],
    collectionMovies: [],
}
export const playlist = (state = initialState, action) => {
    
    switch(action.type){

        case ADD_ITEM:
            if(state.collectionMovies.some((collectionMovies) => collectionMovies.movie.id === action.payload.movie.id)){
                return state;
            }
            
            return{
                ...state,
                collectionMovies: state.collectionMovies.concat(action.payload),
            }
        case CHANGE_ITEM:
           for(const collection of state.collectionMovies){
                if(collection.movie.id === action.payload.id)
                collection.isFavorite = !collection.isFavorite
           }
            return state;

        case ADD_PLAYLIST:
            if(state.favorite.some((favorite) => favorite.movie.id === action.payload.movie.id)){
                return state;
            }
            return{
                ...state,
                favorite: state.favorite.concat(action.payload),
            }

        case REMOVE_PLAYLIST:
            for (const fav of state.favorite){
                if(fav.movie.id === action.payload)
                     fav.isFavorite = false
            }
        return {    
        ...state,
            favorite: state.favorite.filter(({isFavorite}) => isFavorite !== false),
        }

        default:
            return state;
    }
}