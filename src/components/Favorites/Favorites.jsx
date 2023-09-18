import { useSelector } from 'react-redux'
import Card from '../Home/Card'

function Favorites (){
    const { myFavorites } = useSelector((state) => state.favorites)
    
    return (
        <>
            <div className="w-11/12 mx-auto flex justify-center items-center pt-20 px-14 pb-10 flex-wrap gap-48">
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