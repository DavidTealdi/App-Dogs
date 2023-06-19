import style from "../cards/cards.module.css";
import styles from '../cardList/cardList.module.css'
import styl from './Pagina.module.css'

import { Link } from "react-router-dom"

const Paginado = ({currentPage, prevHandlers, nextHandlers, allDogs}) => {

    const card = allDogs.map((dog, index) => {
        return ( 
            <div key={index} className={style.card_container}>

                <Link to={`/home/${dog.id}`} style={{ textDecoration: "none", color: "#0ccac4" }}>
                <img src={dog?.image} alt={dog.image} className={style.image}/>
                <h2>Raza: {dog?.name}</h2>
                <p>Temperamentos: {dog?.temperaments}</p>
                <p>Peso: {dog?.weight}</p>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h3 className={styl.pagina}>Pagina: {currentPage}</h3>
            <button className={styl.button_pag1} onClick={prevHandlers}>Prev</button>
            <button className={styl.button_pag2} onClick={nextHandlers}>Next</button>

            <div className={styles.card_list}>
                {card}
            </div>

        </div>
    )
}

export default Paginado