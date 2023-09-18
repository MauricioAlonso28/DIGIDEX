import style from './detail.module.css'
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InfoCard from './InfoCard';

const URL_API = "https://www.digi-api.com/api/v1/digimon/"

function Detail(){
    const { id } = useParams()
    const [digimon, setDigimon] = useState({});
    const [newId, setNewId] = useState(id);
    const [styleCard, setStyleCard] = useState('opacity-0')
    const navigate = useNavigate()

    // FUNCTION TO CALL THE API
    async function callApi (){
        try {
            const { data } = await axios.get(`${URL_API}${newId}`)

            data.name ? setDigimon(data) : window.alert('No Details');
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        callApi()
    }, [newId])

    const URL = digimon.images ? digimon.images[0].href : null;
    const FIELDS = digimon.fields ? digimon.fields : null
    const PriorEv = digimon.priorEvolutions ? digimon.priorEvolutions[0] : null
    const NextEv = digimon.nextEvolutions && digimon.nextEvolutions.length > 0 ? digimon.nextEvolutions[0] : null

    // FUNCTION TO SEE THE INFO
    function openInfo (e){
        e.preventDefault()
        setStyleCard('opacity-100')
    }

    function closeInfo (e){
        e.preventDefault()
        setStyleCard('opacity-0')
    }


    // FUNCTION TO PRIOR EVOLUTION
    function priorEv (e){
        e.preventDefault() 
        if (PriorEv !== null && PriorEv.id > 0){
            setNewId(PriorEv.id)
            navigate(`/detail/${PriorEv.id}`)
        } else {
            window.alert("This Digimon doesn't have a prior evolution")
        }
    }

    // FUNCTION TO NEXT EVOLUTION
    function nextEv (e){
        e.preventDefault() 
        if (NextEv !== null && NextEv.id > 0){
            setNewId(NextEv.id)
            navigate(`/detail/${NextEv.id}`)
        } else {
            window.alert("This Digimon doesn't have a prior evolution")
        }
    }

    return(
        <>
            <div className={style.container} key={digimon.id}>
                <InfoCard
                    URL={URL}
                    FIELDS={FIELDS}
                    closeInfo={closeInfo}
                    digimon={digimon}
                    styleX={styleCard}
                /> 
                <div className={style.digicard} key={digimon.id}>
                    {
                        URL !== null ? <img className={style.img} src={URL} alt={digimon.name} /> : <img className={style.img}  src={require('../../resources/gif-video/loading-detail.gif')} alt='Loading...'/>
                    }
                    {/* BUTTONS */}
                    <button className={`absolute ${style.btn} ${style.btnI}`} onClick={openInfo}>?</button>
                    <button className={`absolute ${style.btn} ${style.btnN}`} onClick={nextEv}>Next Ev</button>
                    <button className={`absolute ${style.btn} ${style.btnP}`} onClick={priorEv}>Prior Ev</button>
                </div>
            </div>
        </>
    )
}
export default Detail
