import axios from "axios";
import { useLocation, Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { addDigimon } from "./features/digimon/digimonSlice";
import { useEffect } from "react";
// COMPONENTS
import Front from "./components/Front/Front";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./components/Favorites/Favorites"
import Detail from "./components/Detail/Detail";
import Button from "./components/Button/Button";
import Pages from "./components/Page/Pages";

const URL_API = "https://www.digi-api.com/api/v1/digimon"

function App() {
    const { id } = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const { digimons } = useSelector((state) => state.digimons)

    async function callApi (){
        try {
            let count = 0

            while (digimons.length < 1422) {
                const { data } = await axios.get(`${URL_API}?page=${count}`)
                const { content } = await data

                content.map((obj) => {
                    if (digimons.length < 1422) {
                        dispatch(addDigimon(obj))                                    
                    }
                })
                count++
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        callApi()
    },[])

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
                    element={<Home/>}
                />
                <Route
                    path="/favorites"
                    element={<Favorites/>}
                />
                {/* <Route
                    path="/add"
                /> */}
                <Route
                    path="/detail/:id"
                    element={<Detail key={id}/>}
                />
                <Route
                    path="/page/:id"
                    element={<Pages/>}
                />
            </Routes>
            {
                location?.pathname !== '/' ? <Button/> : null
            }
        </>
    );
}

export default App;
