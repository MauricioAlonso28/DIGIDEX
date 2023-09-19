import style from './button.module.css'
import { useNavigate } from "react-router-dom"

function Button (){
    const navigate = useNavigate()

    function handleStart (e){
        e.preventDefault()
        navigate('/')
    }

    return(
        <>
            <button 
                className={`fixed select-none text-s -skew-x-5deg -skew-y-0 outline-none font-digimon  ${style.btn} ${style.btnInfo}`}
                onClick={handleStart}>
                    START
            </button>
        </>
    )
}

export default Button