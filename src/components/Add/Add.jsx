import Form from './Form'
import style from './form.module.css'

function Add (){
    return (
        <div className="w-full h-5/6 flex items-center justify-center">
            <div className={`relative h-xl-1/5 w-4/6 bg-slate-50 rounded-2xl shadow-md shadow-slate-500 ${style.divForm}`}>
                <div className={`absolute w-2/4 left-none h-full rounded-s-2xl  ${style.images}`}>
                    <div className='h-full w-full relative'>
                        <img 
                            className={`absolute w-full h-full rounded-s-2xl`} 
                            src={require('../../resources/gif-video/form.gif')}
                            alt="digimonForm" 
                        />
                        <img
                            className={`absolute z-10 h-16 top-1/2 left-1/3 ${style.img1}`} 
                            src={require('../../resources/gif-video/agumon.gif')} 
                            alt="agumon" 
                        />
                        <img
                            className={`absolute z-10 h-24 top-1/2 right-25 ${style.img2}`} 
                            src={require('../../resources/gif-video/gabumon.gif')} 
                            alt="gabumon" 
                        />
                        <img 
                            className={`absolute z-10 h-28 top-45 right-5 ${style.img3}`}
                            src={require('../../resources/gif-video/guilmon.gif')} 
                            alt="guilmon" 
                        />
                        <img 
                            className={`absolute z-10 h-20 top-15 right-30 ${style.img4}`}
                            src={require('../../resources/gif-video/pigmon.gif')} 
                            alt="pigmon" 
                        />
                    </div>
                </div>
                <div className={`absolute w-2/4 right-none h-full flex flex-col justify-center items-center ${style.form}`}>
                    <Form/>
                </div>
            </div>
        </div>
    )
}

export default Add