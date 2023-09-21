import style from './form.module.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNewDigimon, addDigimon } from '../../features/digimon/digimonSlice'

function Form (){
    const { newIndex, xAntibody, levels, attributes, types, skills } = useSelector((state) => state.digimons)
    const [newDigimon, setNewDigimon] = useState({
        id: newIndex,
        name: '',
        xAntibody: '',
        releaseDate: '',
        image: '',
        images: [
            {
                href: '',
            }
        ],
        levels: [
            {
                id: '',
                level: ''
            }
        ],
        attributes: [
            {
                id: '',
                attribute: ''
            }
        ],
        types: [
            {
                id: '',
                type: ''
            }
        ],
        skills: [
            {
                id: '',
                skill: ''
            }
        ],
        fields: [
            {
                id: '',
                field: ''
            }
        ],
    })
    const dispatch = useDispatch()

    function handleChange(e) {
        const { name, value } = e.target;

        if (name === 'image') {
            setNewDigimon({
                ...newDigimon,
                image: value,
                images: [
                    {
                        href: value, 
                    }
                ]
            });
        } else if (name === 'level'){
            const levelFound = levels.find((level) => level.name === value)

            setNewDigimon({
                ...newDigimon,
                levels: [
                    {
                        id: levelFound ? levelFound.id: 0,
                        level: value, 
                    }
                ]
            });
        } else if (name === 'attribute'){
            const attributeFound = attributes.find((attribute) => attribute.name === value)

            setNewDigimon({
                ...newDigimon,
                attributes: [
                    {
                        id: attributeFound ? attributeFound.id: 0,
                        attribute: value, 
                    }
                ]
            });
        } else if (name === 'type'){
            const typeFound = types.find((type) => type.name === value)

            setNewDigimon({
                ...newDigimon,
                types: [
                    {
                        id: typeFound ? typeFound.id: 0,
                        type: value, 
                    }
                ]
            });
        } else if (name === 'skill'){
            const skillFound = skills.find((skill) => skill.name === value)

            setNewDigimon({
                ...newDigimon,
                skills: [
                    {
                        id: skillFound ? skillFound.id: 0,
                        skill: value, 
                    }
                ]
            });
        }else {
            setNewDigimon({
                ...newDigimon,
                [name]: value
            });
        }
    }

    function createDigimon(e) {
        e.preventDefault();

        dispatch(addNewDigimon(newDigimon))
        dispatch(addDigimon(newDigimon))
        setNewDigimon({
            id: newIndex + 1,
            name: '',
            xAntibody: '',
            releaseDate: '',
            image: '',
            images: [
                {
                    href: '',
                }
            ],
            levels: [
                {
                    id: '',
                    level: ''
                }
            ],
            types: [
                {
                    id: '',
                    type: ''
                }
            ],
            attributes: [
                {
                    id: '',
                    attribute: ''
                }
            ],
            skills: [
                {
                    id: '',
                    skill: ''
                }
            ],
            fields: [
                {
                    id: '',
                    field: ''
                }
            ],
        })
    }

    return(
        <>
            <h1 className="font-mono font-bold text-center text-3xl h-10 w-full flex items-center justify-center" >ADD A NEW DIGIMON</h1>
            <form onSubmit={createDigimon} className="grid grid-cols-2 grid-rows-4 h-4/5 w-75 font-mono relative">
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="name">Name:</label>
                    <input className='border-1 border-black rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950' name='name' type="text" value={newDigimon.name} onChange={handleChange} placeholder="Insert Digimon's name" required/>
                </div>
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="image">Image:</label>
                    <input className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 ' name='image' type="text" value={newDigimon.image} onChange={handleChange} placeholder="Insert Url" required/>
                </div>
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="releaseDate">ReleaseDate:</label>
                    <input className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 ' name='releaseDate' type="text" value={newDigimon.releaseDate} onChange={handleChange} placeholder="Insert release date" required/>
                </div>
                {/* ANTIBODY */}
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="xAntibody">X-Antibody:</label>
                    <select className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 w-38' name='xAntibody' id='' onChange={handleChange}>
                        {
                            xAntibody?.map((obj) => {
                                return(
                                    <>
                                        <option value={obj.toString()}>{obj.toString()}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                {/* LEVELS */}
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="level">Level:</label>
                    <select className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 w-38' name='level' id='' onChange={handleChange}>
                        {
                            levels?.map((obj) => {
                                return(
                                    <>
                                        <option value={obj.name}>{obj.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                {/* ATTRIBUTES */}
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="attribute">Attribute:</label>
                    <select className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 w-38' name='attribute' id='' onChange={handleChange}>
                        {
                            attributes?.map((obj) => {
                                return(
                                    <>
                                        <option value={obj.name}>{obj.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                {/* TYPES */}
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="type">Type:</label>
                    <select className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 w-38' name='type' id='' onChange={handleChange}>
                        {
                            types?.map((obj) => {
                                return(
                                    <>
                                        <option value={obj.name}>{obj.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                {/* SKILLS */}
                <div className='flex flex-col justify-center items-center relative'>
                    <label className='absolute top-4 left-16' htmlFor="skill">Skill:</label>
                    <select className='border-1 rounded-xss px-1 py-0 text-12 bg-slate-200 text-slate-950 w-38' name='skill' id='' onChange={handleChange}>
                        {
                            skills?.map((obj) => {
                                return(
                                    <>
                                        <option value={obj.name}>{obj.name}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='flex justify-center items-center col-span-2 pt-5'>
                    <button type="submit" className={` font-digimon select-none -skew-x-5deg skew-y-0 text-s ${style.btn} ${style.btnInfo}`} >Create Digimon</button>
                </div>
            </form>
        </>
    )
}

export default Form