import { useEffect} from "react";
import { useParams } from "react-router-dom";
import { getDogsById, deleteDog } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";

const Detail = () => {

    const dispatch = useDispatch();

    // Trae el detalle del perro
    let dog = useSelector((state) => state.dogDetail);

    // Guardo el array de objeto de temperamentos
    let datostemp = dog.Temperaments

    // objeto para guardar la info que llega de la api
    let obj = {
        image: '',
        name: '',
        height: '',
        weight: '',
        temperaments: [],
        lifeSpan: ''
    }

    // guardo los temperamentos en un array
    datostemp?.map(element => (
        obj.temperaments.push(element.name)
    ))
    
    // variable para guardar los temperamentos
    let unionTemp = null
    
    // unimos los temperamentos del array
    unionTemp = obj.temperaments.join(", ")
    

    const { id } = useParams();

    useEffect(() => {

        dispatch(getDogsById(id));

        return () => {
            dispatch(deleteDog())
        } 
    
    }, [dispatch, id]);

    if(isNaN(id)) {
        obj = {
            image: dog?.image,
            name: dog?.name,
            height: dog?.height,
            weight: dog?.weight,
            lifeSpan: dog?.lifeSpan,
        }
    
    } else {
        obj = {
            image: dog[0]?.image,
            name: dog[0]?.name,
            height: dog[0]?.height,
            weight: dog[0]?.weight,
            temperaments: dog[0]?.temperaments,
            lifeSpan: dog[0]?.lifeSpan
        }
    }

    return (
        <div className={style.detail_cont}>
            <h1>Detail Dog</h1> 

            <div className={style.detailD}>
                <img src={obj?.image} alt={obj.image} className={style.imageD}/>
                <h2>Raza: {obj?.name}</h2>
                <p>Altura: {obj?.height}</p>
                <p>Peso: {obj?.weight}</p>
                <p>Temperamentos: {unionTemp ? unionTemp : obj?.temperaments}</p>
                <p>Años de vida: {obj?.lifeSpan}</p>
            </div> 
        </div>
    )
}

export default Detail