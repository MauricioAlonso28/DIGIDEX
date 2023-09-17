import Front from "./components/Front/Front";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./components/Favorites/Favorites"
import { garumon } from './objectTest.js'
import Detail from "./components/Detail/Detail";

function App() {
    const location = useLocation()

    return (
        <>
            {
                location?.pathname !== '/' ? <Navbar/> : <Front />
            }
            <Routes>
                <Route
                    path="/"
                    element={<Front/>}
                />
                <Route
                    path="/home"
                    element={<Home digimon={garumon}/>}
                />
                <Route
                    path="/favorites"
                    element={<Favorites/>}
                />
                <Route
                    path="/detail/:id"
                    element={<Detail digimon={garumon}/>}
                />
            </Routes>
        </>
    );
}

export default App;
