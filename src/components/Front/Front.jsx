import style from './front.module.css'
import { Link } from 'react-router-dom'

function Front (){
    return(
        <>
            <div className={`w-full h-full absolute flex justify-center items-center top-none left-none ${style.front}`}>
                <Link to={'/home'}>
                    <button  className={`text-white py-2 px-4 rounded text-100 ${style.btn}`}>
                        START
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Front