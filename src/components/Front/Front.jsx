import style from './front.module.css'
import { Link } from 'react-router-dom'

function Front (props){
    return(
        <>
            <div className={style.test}>
                <Link to={'/home'}>
                    <button  className={`text-white py-2 px-4 rounded text-xl ${style.btn}`}>
                        START
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Front