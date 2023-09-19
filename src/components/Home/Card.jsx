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
            <div 
                className={`h-80 w-card relative flex justify-center items-center hover:scale-110 ${style.divCard}`} 
                key={id}>
                    <Link to={`/detail/${id}`}>
                        <img 
                            className={`absolute h-Card w-Card rounded-small top-ss left-sx ${style.imgCard}`} 
                            src={image} 
                            alt={name} />
                    </Link>
                    {
                        myFav 
                        ? <button 
                            className={`absolute bottom-sb left-sl ${style.btn}`} 
                            onClick={deleteMyFav}>❤️
                          </button> 
                        : <button 
                            className={`absolute bottom-sb left-sl ${style.btn}`} 
                            onClick={addMyFav}>🤍
                        </button>
                    }
            </div>
        </>
    )
}

export default Card