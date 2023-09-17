import style from './detail.module.css'

function InfoCard (props){
    return(
        <>
            <div className={`bg-white z-2 absolute ${props.style} transition duration-1000 ease-in-out ${style.bigContainer} `}> 
                <div className={`flex flex-col justify-center items-center ${style.infoCard}`}>
                    <div className={`${style.title}`}>
                        <button className={`absolute ${style.infoBtn}`} onClick={props.closeInfo}>X</button>
                        <h3 className={`${style.name}`}>{props.digimon.name}</h3>
                    </div>
                    <img className={`${style.infoCardImg}`} src={props.URL} alt={props.digimon.name} />
                    {/* DETAILS */}
                    <div className={`w-full ${style.infoDetails}`}>
                        <div className={`${style.detailPower}`}>
                            <div className='relative'>
                                <h4>Level</h4>
                                {
                                    props.digimon.levels?.map((obj) => {
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
                                    props.digimon.attributes?.map((obj) => {
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
                                    props.digimon.types?.map((obj) => {
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
                                        props.digimon.skills?.map((obj) => {
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
                                props.FIELDS !== null && props.FIELDS.length > 0
                                ? <div className='flex flex-col justify-center items-center  mt-2.5 w-full gap-2'>
                                    <h4>Fields</h4>
                                    <div className='flex justify-center items-center gap-2'>
                                        {
                                            props.FIELDS.map((obj) => {
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