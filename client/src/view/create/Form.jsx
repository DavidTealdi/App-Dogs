import style from './Form.module.css'
import validate from '../validate'
import { useEffect, useState } from 'react'
import { postDogs, getTemperaments } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";

const Form = () => {

    const dispatch = useDispatch()

    const allTemperaments = useSelector((state) => state.temperaments)

    const [input, setInput] = useState({
        name: '',
        height: '',
        weight: '',
        lifeSpan: '',
        image: '',
        temperaments: []
    })

    const [error, setError] = useState({}) 

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        setError(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }


    const handlerTemps = (e) => {
        const add = (e) => {
            if(input.temperaments.includes(e.target.value)){
                return [...input.temperaments];
            } else {
                return [...input.temperaments, e.target.value];
            }
        }
        setInput({
            ...input,
            temperaments: add(e),
        });
    };

    const handleDeleteTemp = (e) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => temp !== e)
        })
    }


    
    let dogInput = {
        name: input.name,
        height: input.height,
        weight: input.weight,
        lifeSpan: input.lifeSpan,
        image: input.image,
        temperamentName: input.temperaments
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setInput({
            name: '',
            height: '',
            weight: '',
            lifeSpan: '',
            image: '',
            temperaments: []
        })

        dispatch(postDogs(dogInput))
        
    };

    useEffect(() => {
        dispatch(getTemperaments())

    }, [dispatch])
    

    return (
        <section>
            <h2 className={style.h2C}>Create dog</h2>    

            <form onSubmit={handleSubmit} className={style.FormC}>

                {/* RAZA */}
                <label className={style.labelC}>Raza</label>
                <input type="text" placeholder="Raza" name='name' value={input.name} onChange={handleInput} className={style.inputC}/>
                <p className={style.pError}>{error.name && error.name}</p>

                {/* ALTURA */}
                <label htmlFor="" className={style.labelC}>Altura</label>
                <input type="text" placeholder="Altura" name='height' value={input.height} onChange={handleInput}  className={style.inputC}/>
                <p className={style.pError}>{error.height && error.height}</p>

                {/* PESO */}
                <label className={style.labelC}>Peso</label>
                <input type="text" placeholder="Peso" name='weight' value={input.weight} onChange={handleInput} className={style.inputC}/>
                <p className={style.pError}>{error.weight && error.weight}</p>

                {/* ESPERANZA DE VIDA */}
                <label className={style.labelC}>Esperanza de vida</label>
                <input type="text" placeholder="Esperanza de vida" name='lifeSpan' value={input.lifeSpan} onChange={handleInput} className={style.inputC}/>
                <p className={style.pError}>{error.lifeSpan && error.lifeSpan}</p>
                
                {/* IMG */}
                <label className={style.labelC}>Raza</label>
                <input type="text" placeholder="Imagen" name='image' value={input.image} onChange={handleInput} className={style.inputC}/>
                <p className={style.pError}>{error.image && error.image}</p>


                <select className={style.select} onChange={e => handlerTemps(e)}>
                        {
                            allTemperaments?.map(item=>{
                                return (
                                    <option value={item.name}>{item.name}</option>
                                )
                        })
                    }
                </select>


                <div className={style.array}>
                    {
                        input.temperaments?.map(item => {
                            return (<div key={item}>
                                <button className={style.buttonT} onClick={() => {handleDeleteTemp(item)}}>{item}</button>
                            </div>)
                        })
                    }
                </div>


                <button disabled = {!input.name || !input.height || !input.weight || !input.lifeSpan || error.name || error.height || error.weight || error.lifeSpan}> Enviar </button>

            </form>
            
            
            

        </section>
    )
}

export default Form