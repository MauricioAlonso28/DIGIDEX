import { useSelector, useDispatch } from 'react-redux'
import Card from '../Home/Card'
import style from './favorites.module.css'
import { orderFav } from '../../features/fav/favSlice'

function Favorites (){
    const { myFavorites } = useSelector((state) => state.favorites)
    const dispatch = useDispatch()

    function handleOrder (event){
        dispatch(orderFav(event.target.value))
    }
    
    return (
        <>
            <div className='flex justify-center items-center w-full p-6'>
                <select className={`bg-slate-500 text-white border-0 rounded-md py-0.5 px-1 font-mono font-bold shadow ${style.selector}`} name='' id='' onChange={handleOrder}>
                    <option className='rounded-sm' value="asc">Ascending</option>
                    <option className='rounded-sm' value="desc">Descending</option>
                </select>
            </div>
            <div className="w-11/12 mx-auto flex justify-center items-center px-14 pb-10 flex-wrap gap-48">
                {/* LOOP THROUGH EACH DIGIMON */}
                {
                    myFavorites.length > 0 ? myFavorites.map((obj) => {
                        return(
                            <>
                                <Card
                                    key={obj.id}
                                    id={obj.id}
                                    image={obj.image || obj.URL}
                                    name={obj.name}
                                />
                            </>
                        )
                    }) : null
                }
            </div>
        </>
    )
}

export default Favorites