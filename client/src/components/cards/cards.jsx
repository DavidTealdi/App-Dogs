import style from "./cards.module.css";

import { Link } from "react-router-dom";

function Cards({ dogs }) {

  const {id, name, image, temperaments, weight } = dogs;

  return (
    <div className={style.card_container}>

      <Link to={`/home/${id}`} style={{ textDecoration: "none", color: "#0ccac4" }}>
        <img src={image} alt={image} className={style.image}/>
        <h2>Raza: {name}</h2>
        <p>Temperamentos: {temperaments}</p>
        <p>Peso: {weight}</p>
      </Link>
    </div>
  );
}

export default Cards;