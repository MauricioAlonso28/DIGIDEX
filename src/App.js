import axios from "axios";
import { useLocation, Routes, Route, useParams } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { addDigimon, addLevels, addAttributes, addTypes, addSkills } from "./features/digimon/digimonSlice";
// COMPONENTS
import Front from "./components/Front/Front";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Favorites from "./components/Favorites/Favorites"
import Detail from "./components/Detail/Detail";
import Button from "./components/Button/Button";
import Pages from "./components/Page/Pages";
import Add from "./components/Add/Add";

const URL_API = "https://www.digi-api.com/api/v1/";
const URL_DIGIMON = "https://www.digi-api.com/api/v1/digimon"

function App() {
    const { id } = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const { digimons, levels, attributes, types, skills } = useSelector((state) => state.digimons)

    async function callApi (){
        try {
            let count = 0

            while (digimons.length < 1422) {
                const { data } = await axios.get(`${URL_DIGIMON}?page=${count}`)
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

    async function callLevels() {
        try {
            let count = 0

            while (levels.length < 10) {
                const { data } = await axios.get(`${URL_API}level?page=${count}`)
                const { fields } = await data.content

                fields.map((obj) => {
                if(levels.length < 10){
                    dispatch(addLevels(obj))
                }
                })
                count++
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function callAttributes() {
        try {
            let count = 0

            while (attributes.length < 7) {
                const { data } = await axios.get(`${URL_API}attribute?page=${count}`)
                const { fields } = await data.content

                fields.map((obj) => {
                    if(attributes.length < 7){
                        dispatch(addAttributes(obj))
                    }
                })
                count++
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function callTypes() {
        try {
            let count = 0

            while (count < 2) {
                const { data } = await axios.get(`${URL_API}type?page=${count}`)
                const { fields } = await data.content

                fields.map((obj) => {
                    if(types.length < 10){
                        dispatch(addTypes(obj))
                    }
                })
                count++
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    async function callSkills() {
        try {
            let count = 0

            while (count < 2) {
                const { data } = await axios.get(`${URL_API}skill?page=${count}`)
                const { fields } = await data.content

                fields.map((obj) => {
                    if(skills.length < 10){
                        dispatch(addSkills(obj))
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
        callLevels()
        callAttributes()
        callTypes()
        callSkills()
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
                <Route
                    path="/add"
                    element={<Add/>}
                />
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
