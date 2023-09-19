import BtnPages from "../Page/BtnPages";
import Card from "./Card"
import {useSelector} from 'react-redux'

function Home (){
    const { digimons } = useSelector((state) => state.digimons)
    const firstDigimons = digimons.slice(0, 24);

    return (
        <>
            <div className="w-11/12 mx-auto flex justify-center items-center pt-20 px-14 pb-20 flex-wrap gap-48">
                {/* LOOP THROUGH EACH DIGIMON */}
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
                        <p className="font-xl text-zinc-100">Cargando Digimons...</p>
                    )
                }
                <BtnPages/>
            </div>
        </>
    )
}

export default Home