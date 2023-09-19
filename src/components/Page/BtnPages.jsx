import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeIndex } from "../../features/digimon/digimonSlice"
import { useNavigate } from "react-router-dom"

function BtnPages (){
    const [buttons, setButtons] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function indexId(){
        for (let i = 1; i <= 60; i++) {
            buttons.push(i)
        }
    }

    function onChange (e) {
        dispatch(changeIndex(e.target.value))
        navigate(`/page/${e.target.value}`)

    }
    useEffect(() => {
        indexId()
    }, [])
    return (
        <>
            <div className="w-full flex items-center justify-center gap-1">
                {
                    buttons?.map((i) => {
                        return (
                            <>     
                                <button className="text-white bg-slate-400 rounded font-serif px-0.5" onClick={onChange}  value={i}>{i}</button>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BtnPages