import style from './navbar.module.css'
import { NavLink} from "react-router-dom"
import { useState} from 'react';
import { useNavigate} from 'react-router-dom';


function Navbar (){

    const [ id, setId ] = useState('')
    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate()

    function handlePlusClick (){
        setShowInput(true);

        setTimeout(() => {
            setShowInput(false)
        }, 25000);
    };
    function handleChange (e){
        setId(e.target.value) 
    }
    function handleDetail (e){
        e.preventDefault()
        navigate(`/detail/${id}`)
    }



    return (
        <>  
            <div className="flex justify-around mx-auto bg-slate-500 h-20 relative items-center shadow-lg shadow-slate-900">
                <div className="absolute left-5 flex justify-center items-center">
                    <img className="h-6 w-6 relative" src={require('../../resources/img/digivice-nv.webp')} alt="digivice-logo" />
                    {
                        showInput ? (
                        <input 
                            className={`absolute left-11 text-white rounded-r-lg text-xs pl-1 border-none font-digimon h-ml ${style.input}`} 
                            type="search" 
                            value={id} 
                            onChange={handleChange}  
                            placeholder='Insert Id'/>
                        ) : null
                    }
                    {
                        showInput ? (
                        <button 
                            className='button font-mono font-bold absolute text-s' 
                            onClick={handleDetail}>
                                ?
                        </button>
                        ) : (
                        <button 
                            className='button font-mono font-bold absolute' 
                            onClick={handlePlusClick}>
                                +
                        </button>
                        )
                    }
                </div>
                <h1 className={`font-bold text-xl -skew-x-20 font-digimon`}>
                    <span className="text-white">DIGI</span>
                    <span className="text-blue">DEX</span>
                </h1>
                <div className="absolute right-5 flex justify-around p-1.5 gap-5">
                    <NavLink 
                        className={`font-digimon relative select-none -skew-x-5deg skew-y-0 text-s ${style.btn} ${style.btnInfo}`} 
                        to={'/home'}>
                            Home
                    </NavLink>
                    <NavLink 
                        className={`font-digimon relative select-none -skew-x-5deg skew-y-0 text-s ${style.btn} ${style.btnInfo}`} 
                        to={'/favorites'}>
                            Favorites
                    </NavLink>
                    <NavLink 
                        className={`font-digimon relative select-none -skew-x-5deg skew-y-0 text-s ${style.btn} ${style.btnInfo}`} 
                        to={'/add'}>
                            Add
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar