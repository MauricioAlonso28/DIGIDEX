import axios from "axios";
import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './detail.module.css'
import InfoCard from './InfoCard';

const URL_API = "https://www.digi-api.com/api/v1/digimon/"

function Detail(){
    const { id } = useParams()
    const [digimon, setDigimon] = useState({});
    const [styleCard, setStyleCard] = useState('opacity-0')
    const [notInfo, setNotInfo] = useState('z-10')
    const navigate = useNavigate()
    const { digimonsAdded } = useSelector((state) => state.digimons)

    // FUNCTION TO CALL THE API
    async function callApi (){
        try {
            if (id > 1422) {
                const digimonFound = digimonsAdded.find((obj) => obj.id === Number(id))
                
                digimonFound.name ? setDigimon(digimonFound) : window.alert("There aren't details for this Digimon");
            } else {
                const { data } = await axios.get(`${URL_API}${id}`)
                data.name ? setDigimon(data) : window.alert("There aren't details for this Digimon");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        callApi()
    }, [id])

    const URL = digimon.images ? digimon.images[0].href : null;
    const FIELDS = digimon.fields ? digimon.fields : null
    const PriorEv = digimon.priorEvolutions ? digimon.priorEvolutions[0] : null
    const NextEv = digimon.nextEvolutions && digimon.nextEvolutions.length > 0 ? digimon.nextEvolutions[0] : null

    // FUNCTION TO SEE THE INFO
    function openInfo (e){
        e.preventDefault()
        setStyleCard('opacity-100 z-10')
        setNotInfo('z-0')
    }

    function closeInfo (e){
        e.preventDefault()
        setStyleCard('opacity-0 z-0')
        setNotInfo('z-10')
    }


    // FUNCTION TO PRIOR EVOLUTION
    function priorEv (e){
        e.preventDefault() 
        if (PriorEv !== null && PriorEv.id > 0){
            navigate(`/detail/${PriorEv.id}`)
        } else {
            window.alert("This Digimon doesn't have a prior evolution")
        }
    }

    // FUNCTION TO NEXT EVOLUTION
    function nextEv (e){
        e.preventDefault() 
        if (NextEv !== null && NextEv.id > 0){
            navigate(`/detail/${NextEv.id}`)
        } else {
            window.alert("This Digimon doesn't have a next evolution")
        }
    }

    return(
        <>
            <div className={`flex justify-center items-center w-full h-4/5`} key={digimon.id}>
                <InfoCard
                    URL={URL}
                    FIELDS={FIELDS}
                    closeInfo={closeInfo}
                    digimon={digimon}
                    styleX={styleCard}
                /> 
                <div className={`flex justify-center items-center ${notInfo} relative ${style.digicard}`} key={digimon.id}>
                    {
                        URL !== null ? <img className={style.img} src={URL} alt={digimon.name} /> : <img className={style.img}  src={require('../../resources/gif-video/loading-detail.gif')} alt='Loading...'/>
                    }
                    {/* BUTTONS */}
                    <button className={`absolute font-bold ${style.btn} ${style.btnI}`} onClick={openInfo}>?</button>
                    <button className={`absolute font-bold ${style.btn} ${style.btnN}`} onClick={nextEv}>Next Ev</button>
                    <button className={`absolute font-bold ${style.btn} ${style.btnP}`} onClick={priorEv}>Prior Ev</button>
                </div>
            </div>
        </>
    )
}
export default Detail
