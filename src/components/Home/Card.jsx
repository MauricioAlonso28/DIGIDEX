import { useState, useEffect } from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFav, deleteFav } from '../../features/fav/favSlice'
import { useSelector } from 'react-redux'

function Card ({id, image, name}){
    const [ myFav, setMyFav ] = useState(false)
    const dispatch = useDispatch()
    const { myFavorites } = useSelector((state) => state.favorites)
    

    // FUNCTION TO ADD FAVORITES
    function addMyFav (){
        setMyFav(true)
        dispatch(addFav({id, image, name}))
    }
    
    // FUNCTION TO DELETE FAVORITES
    function deleteMyFav () {
        setMyFav(false)
        dispatch(deleteFav({id, image, name}))
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setMyFav(true);
            }
        })
    }, [myFavorites])



    return (
        <>
            <div className={style.divCard} key={id}>
                <Link to={`/detail/${id}`}>
                    <img className={style.imgCard} src={image} alt={name} />
                </Link>
                {
                    myFav 
                    ? <button className={style.btn} onClick={deleteMyFav}>❤️</button>
                    : <button className={style.btn} onClick={addMyFav}>🤍</button>
                }
            </div>
        </>
    )
}

export default Card