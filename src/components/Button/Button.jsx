import { useNavigate } from "react-router-dom"
import style from './button.module.css'
function Button (){
    const navigate = useNavigate()

    function handleStart (e){
        e.preventDefault()
        navigate('/')
    }

    return(
        <>
            <button 
                className={`${style.btn} ${style.btnInfo}`}
                onClick={handleStart}>
                    START
            </button>
        </>
    )
}

export default Button