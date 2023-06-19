import style from "./Home.module.css"

import { getDogs, getDogsByName, filter, deleteDog, filterPeso } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CardLinst from '../../components/cardList/cardList'
import InputBusqueda from '../../components/inputBusqueda/InputBusqueda'
import Paginado from "../../components/paginado/Paginado";

const Home = () => {
    const dispatch = useDispatch()

    const allDogs = useSelector((state) => state.allDogs)
    const dogName = useSelector((state) => state.dogName)
    
    const dogsFiltered = useSelector((state) => state.dogsFilter)

    const ITEMS_PAGE = 8
    const [datos, setDatos] = useState(allDogs)
    const [items, setItems] = useState([...allDogs].splice(0, ITEMS_PAGE))
    const [currentPage, setCurrentPage] = useState(0)



    // Input
    const [searchString, setSearchString] = useState("")

    // Input
    const handleChange = (event) => {
        setSearchString(event.target.value.toLowerCase());
    };
    
    // Input
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getDogsByName(searchString));
    };



    const nextHandlers = () => {
        const totalElementos = datos.length

        const nextPage = currentPage + 1

        const firstIndex = nextPage * ITEMS_PAGE

        if(firstIndex === totalElementos) return

        setItems([...datos].splice(firstIndex, ITEMS_PAGE))

        setCurrentPage(nextPage)
    }

    const prevHandlers = () => {
        const prevPage = currentPage - 1

        if (prevPage < 0) return
        
        const firstIndex = prevPage * ITEMS_PAGE

        setItems([...datos].splice(firstIndex, ITEMS_PAGE))

        setCurrentPage(prevPage)
    }


    const filterOrd = (event) => {
        dispatch(filter(event.target.value))
    }


    const filterOrdPeso = (event) => {
        dispatch(filterPeso(event.target.value))
    }


    useEffect(() => {
        if(!allDogs.length) dispatch(getDogs())

        setDatos(allDogs)

        setItems([...allDogs].splice(0, ITEMS_PAGE))

        return () => {
            dispatch(deleteDog())
        }

    }, [dispatch, allDogs])
    

    return (
        <div className={style.home}>

            <h1 className={style.home_title}>Dogs app</h1>

            <InputBusqueda handleSubmit={handleSubmit} handleChange={handleChange}/>

            <CardLinst allDogs={dogName}/>
            
            <Paginado 
                allDogs={items}
                currentPage={currentPage}
                prevHandlers={prevHandlers}
                nextHandlers={nextHandlers}
            />

            <div>

                <label className={style.labelSelectOrder} htmlFor="">Ordenamiento por nombre</label>
                <select className={style.selectOrder} onChange={filterOrd}>
                    <option defaultChecked value='0'>Seleccione como ordenar</option>
                    <option value="asc">Asendente</option>
                    <option value="dct">Desendente</option>
                </select>

                <label className={style.labelSelectOrder} htmlFor="">Ordenamiento por peso </label>
                <select className={style.selectOrder} onChange={filterOrdPeso}>
                    <option defaultChecked value='0'>Seleccione como ordenar</option>
                    <option value="asc">Asendente</option>
                    <option value="dct">Desendente</option>
                </select>

            </div>

            <CardLinst allDogs={dogsFiltered}/>
            
        </div>
    )
}

export default Home 