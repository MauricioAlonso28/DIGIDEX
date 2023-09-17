import style from './home.module.css'
import { Link } from 'react-router-dom'

function Card (props){
    return (
        <>
        <Link to={`/detail/${props.id}`}>
            <div className={style.divCard}>
                <img className={style.imgCard} src={props.image} alt={props.name} />
            </div>
        </Link>
        </>
    )
}

export default Card