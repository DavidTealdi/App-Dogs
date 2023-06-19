import style from './Form.module.css'
import validate from '../validate'
import { useEffect, useState } from 'react'
import { postDogs, getTemperaments } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";

const Form = () => {

    const dispatch = useDispatch()

    const temperaments = useSelector((state) => state.temperaments)

    const [input, setInput] = useState({
        name: '',
        height: '',
        weight: '',
        lifeSpan: '',
        image: '',
    })

    const [error, setError] = useState({}) 

    let temperamentId = []

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

    const selectTemp = (event) => {
        temperamentId.push(event.target.value)
        // console.log(event.target.value)
    }

    let dogInput = {
        name: input.name,
        height: input.height,
        weight: input.weight,
        lifeSpan: input.lifeSpan,
        image: input.image,
        temperamentId
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setInput({
            name: '',
            height: '',
            weight: '',
            lifeSpan: '',
            image: '',
        })

        temperamentId = []

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

                <label htmlFor="temperament" className={style.labelC}>Temperamentos</label>
                <select id='temperament' value={temperaments.id} onChange={selectTemp} className={style.selectC}>
                    <option>Seleccione Temperamentos</option>
                    {
                        temperaments.map(tem => <option key={tem.id} value={tem.id}>{tem.name}</option>)
                    }
                </select>

                <button disabled = {!input.name || !input.height || !input.weight || !input.lifeSpan || error.name || error.height || error.weight || error.lifeSpan }> Enviar </button>

            </form>

        </section>
    )
}

export default Form