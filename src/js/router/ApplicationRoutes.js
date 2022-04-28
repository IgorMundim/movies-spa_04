import {Route, Routes } from "react-router-dom"
import {Home} from "../pages/Home"
import {About} from "../pages/About"
import { Playlist } from "../pages/Playlist"

export const ApplicationRoutes = () =>  (
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/playlist" element={<Playlist />} />
            <Route  exact path="/about/:movieId" element={<About />} />
            
        </Routes>

)