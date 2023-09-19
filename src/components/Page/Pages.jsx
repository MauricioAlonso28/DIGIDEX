import { useSelector } from "react-redux"
import BtnPages from "./BtnPages"
import Card from "../Home/Card";
import { useEffect, useState } from "react";

function Pages (){
    const { digimons } = useSelector((state) => state.digimons)
    const { index } = useSelector((state) => state.digimons)
    const [ arrDigimon, setArrDigimon ] = useState([])

    useEffect(() => {
        let pagesArray= []
        let num1 = 0;
        let num2 = 24;

        for (let i = 0; i < index; i++) {
            pagesArray = digimons.slice(num1, num2)
            num1 += 24
            num2 += 24
        }
        setArrDigimon(pagesArray)
    }, [index])
    


    return(
        <>
            <div className="w-11/12 mx-auto flex justify-center items-center pt-20 px-14 pb-20 flex-wrap gap-48">
                {/* LOOP THROUGH EACH DIGIMON */}
                {
                    arrDigimon.length > 0 ? (
                        arrDigimon.map((obj) =>{
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
            </div>
            <BtnPages/>
        </>
    )
}

export default Pages