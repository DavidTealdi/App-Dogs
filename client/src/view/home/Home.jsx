import style from "./Home.module.css"

import { getDogs, getDogsByName, filter, deleteDog, filterPeso, filterAltura, filtertemp, filteryear,  filterApiDB } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import CardLinst from '../../components/cardList/cardList'
import InputBusqueda from '../../components/inputBusqueda/InputBusqueda'
import Paginado from "../../components/paginado/Paginado";

const Home = () => {
    const dispatch = useDispatch()
    
    // const dogsFiltered = useSelector((state) => state.dogsFilter)
    // const dogName = useSelector((state) => state.dogName)
    

    // Trae todos los perros 
    const allDogs = useSelector((state) => state.allDogs)
    
    // Paginado
    const ITEMS_PAGE = 8
    const [datos, setDatos] = useState(allDogs)
    const [items, setItems] = useState([...allDogs].splice(0, ITEMS_PAGE))
    const [currentPage, setCurrentPage] = useState(1)



    //Estado del Input
    const [searchString, setSearchString] = useState("")



    // Input
    const handleChange = (event) => {
        setSearchString(event.target.value.toLowerCase());
    };
    
    // Submit Input
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getDogsByName(searchString));
    };


    // Logica del paginado next
    const nextHandlers = () => {
        const totalElementos = datos.length

        const nextPage = currentPage + 1

        const firstIndex = nextPage * ITEMS_PAGE

        if(firstIndex > totalElementos) return

        setItems([...datos].splice(firstIndex, ITEMS_PAGE))

        setCurrentPage(nextPage)
    }

    // Logica del paginado prev
    const prevHandlers = () => {
        const prevPage = currentPage - 1

        if (prevPage < 0) return
        
        const firstIndex = prevPage * ITEMS_PAGE

        setItems([...datos].splice(firstIndex, ITEMS_PAGE))

        setCurrentPage(prevPage)
    }


    // Funcion de filtro por nombre
    const filterOrd = (event) => {
        dispatch(filter(event.target.value))
    }

    // Funcion de filtro por peso
    const filterOrdPeso = (event) => {
        dispatch(filterPeso(event.target.value))
    }

    const filterOrdaltura = (event) => {
        dispatch(filterAltura(event.target.value))
    }

    const filterOrdyear = (event) => {
        dispatch(filteryear(event.target.value))
    }

    const filterOrdTemp = (event) => {
        dispatch(filtertemp(event.target.value))
    }

    // const filterPoApiDB = (event) => {
    //     dispatch(filterApiDB(event.target.value))
    // }
 

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

            <div className={style.divOrder1}>

                <div>
                    <label className={style.labelSelectOrder} htmlFor="">Ordenamiento por raza</label>
                    
                    <select className={style.selectOrder} onChange={filterOrd}>
                        <option defaultChecked value='0'>Seleccione como ordenar</option>
                        <option value="dct">A - Z</option>
                        <option value="asc">Z - A</option>
                    </select>

                    <label className={style.labelSelectOrder} htmlFor="">Ordenamiento por peso</label>
                    
                    <select className={style.selectOrder} onChange={filterOrdPeso}>
                        <option defaultChecked value='0'>Seleccione como ordenar</option>
                        <option value="dct">Menor - Mayor</option>
                        <option value="asc">Mayor - Menor</option>
                    </select>
                </div>

                <div>
                    <label className={style.labelSelectOrder} htmlFor="">Ordenamiento por altura</label>
                    
                    <select className={style.selectOrder} onChange={filterOrdaltura}>
                        <option defaultChecked value='0'>Seleccione como ordenar</option>
                        <option value="dct">Menor - Mayor</option>
                        <option value="asc">Mayor - Menor</option>
                    </select>

                    <label className={style.labelSelectOrder} htmlFor="">Ordenamiento por años</label>
                    
                    <select className={style.selectOrder} onChange={filterOrdyear}>
                        <option defaultChecked value='0'>Seleccione como ordenar</option>
                        <option value="dct">Menor - Mayor</option>
                        <option value="asc">Mayor - Menor</option>
                    </select>
                </div>
                
            </div>

                {/* <label className={style.labelSelectOrder} htmlFor="">filtrar</label>
                
                <select className={style.selectOrder} onChange={filterPoApiDB}>
                    <option defaultChecked value='0'>Seleccione como filtrar</option>
                    <option value="db">Perros creados</option>
                    <option value="api">Perros existentes</option>
                </select> */}

            

            
            <Paginado 
                allDogs={items}
                currentPage={currentPage}
                prevHandlers={prevHandlers}
                nextHandlers={nextHandlers}
            />

            

            {/* <CardLinst allDogs={dogName}/> */}
            {/* <CardLinst allDogs={dogsFiltered}/> */}
            
        </div>
    )
}

export default Home 