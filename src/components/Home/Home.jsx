import { NavLink } from "react-router-dom"
import axios from 'axios'
import Card from "./Card"
import { useEffect, useState } from "react"

const URL_API = "https://www.digi-api.com/api/v1/digimon"

function Home (){
    const [digimons, setDigimons] = useState([])

    // FUNCTION TO CALL THE API
    async function callApi (){
        try {
            let count = 0
            let digimonsPush = []

            while (digimonsPush.length < 24) {
                const { data } = await axios.get(`${URL_API}?page=${count}`)
                const { content } = await data

                content.map((obj) => {
                    if (digimonsPush.length < 24) {
                        digimonsPush.push(obj)                                                                              
                    }
                })
                count++
            }
            setDigimons(digimonsPush)
            
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        callApi()
    }, [])
    return (
        <>
            <div className="w-11/12 mx-auto flex justify-center items-center pt-20 px-14 flex-wrap gap-48">
                {/* LOOP THROUGH EACH DIGIMON */}
                {
                    digimons.map((obj) => {
                        return(
                            <>
                                <Card
                                    key={obj.id}
                                    id={obj.id}
                                    image={obj.image}
                                    name={obj.name}
                                />
                            </>
                        )
                    })
                }
                {/* PAGES */}
                <div className={`flex justify-between items-center w-full`}>
                    
                </div>
            </div>
        </>
    )
}

export default Home