import BtnPages from "../Page/BtnPages";
import Card from "./Card"
import {useSelector} from 'react-redux'
import style from './home.module.css'

function Home (){
    const { digimons } = useSelector((state) => state.digimons)
    const firstDigimons = digimons.slice(0, 24);

    return (
        <>
            <div className="w-11/12 mx-auto flex justify-center items-center pt-20 px-14 pb-20 flex-wrap gap-48">
                {/* LOOP THROUGH EACH DIGIMON */}
                {
                    digimons.length > 120 
                    ? (
                    <>
                        {
                            firstDigimons.length > 0 ? (
                                firstDigimons.map((obj) =>{
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
                            ) : (
                                <p className="font-xl text-zinc-100">Loading Digimons...</p>
                            )
                        }
                        <BtnPages/> 
                    </>
                    ) : <div className={`absolute top-1/3 flex text-center items-center justify-center  ${style.loading}`}>
                            <p className="text-zinc-50 font-mono text-l">Loading...</p>
                        </div>
                }
            </div>
        </>
    )
}

export default Home