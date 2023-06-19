import Cards from "../cards/cards";
import style from "./cardList.module.css";

function CardList({allDogs}) {

  const dogsList = allDogs;

  return (
    <div className={style.card_list}>

      {
        dogsList?.map((dogs, index) => (
      
        <Cards key={index} dogs={dogs} />
      
        ))
      }
    </div>
  );
}

export default CardList;