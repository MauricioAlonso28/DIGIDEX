import style from './detail.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addFav, deleteFav } from '../../features/fav/favSlice'


function InfoCard ({URL, FIELDS, closeInfo, digimon, styleX}){
    const [ myFav, setMyFav ] = useState(false)
    const dispatch = useDispatch()
    const { myFavorites } = useSelector((state) => state.favorites)
    const { id, image, name } = digimon

    // FUNCTION TO ADD FAVORITES
    function addMyFav (){
        setMyFav(true)
        dispatch(addFav({id, URL, name}))
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


    return(
        <>
            <div className={`bg-white z-2 absolute ${styleX} transition duration-1000 ease-in-out ${style.bigContainer} `}> 
                <div className={`flex flex-col justify-center items-center ${style.infoCard}`}>
                    {
                        myFav 
                        ? <button className={`absolute right-3 top-3 z-10 ${style.btnFav}`} onClick={deleteMyFav}>❤️</button>
                        : <button className={`absolute right-3 top-3 z-10 ${style.btnFav}`} onClick={addMyFav}>🤍</button>
                    }
                    <div className={`${style.title}`}>
                        <button className={`absolute ${style.infoBtn}`} onClick={closeInfo}>X</button>
                        <h3 className={`${style.name}`}>digimon.name</h3>
                    </div>
                    <img className={`${style.infoCardImg}`} src={URL} alt={digimon.name} />
                    {/* DETAILS */}
                    <div className={`w-full ${style.infoDetails}`}>
                        <div className={`${style.detailPower}`}>
                            <div className='relative'>
                                <h4>Level</h4>
                                {
                                    digimon.levels?.map((obj) => {
                                        return(
                                            <>
                                                <span className={`${style.span}`} key={obj.id}>{obj.level}</span>
                                            </>
                                        )
                                    }) 
                                }
                            </div>
                            <div className='relative'>
                                <h4>Attribute</h4>
                                {
                                    digimon.attributes?.map((obj) => {
                                        return(
                                            <>
                                                <span className={`${style.span}`} key={obj.id}>{obj.attribute}</span>
                                            </>
                                        )
                                    })
                                }
                            </div> 
                            <div className='relative'>
                                <h4>Type</h4>
                                {
                                    digimon.types?.map((obj) => {
                                        return(
                                            <>
                                                <span className={`${style.span}`} key={obj.id}>{obj.type}</span>
                                            </>
                                        )
                                    })
                                }
                            </div> 
                        </div>
                        <div className="flex flex-col justify-center items-center text-center mt-2.5">
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <h4>Skills</h4>
                                <div className='flex flex-wrap justify-center items-center gap-2'>
                                    {
                                        digimon.skills?.map((obj) => {
                                            return(
                                                <>
                                                    <span className={`${style.span}`} key={obj.id}>{obj.skill}</span>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {
                                FIELDS !== null && FIELDS.length > 0
                                ? <div className='flex flex-col justify-center items-center  mt-2.5 w-full gap-2'>
                                    <h4>Fields</h4>
                                    <div className='flex justify-center items-center gap-2'>
                                        {
                                            FIELDS.map((obj) => {
                                                return(
                                                    <>
                                                        <img src={obj.image} alt={obj.field}  key={obj.id}/>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div> 
                                : null
                            }
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}
export default InfoCard