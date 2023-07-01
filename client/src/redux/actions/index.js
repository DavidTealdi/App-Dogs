import axios from 'axios'

export const GET_DOGS = 'GET_DOGS'
export const GET_DOG_BY_NAME = 'GET_DOG_BY_NAME'
export const GET_DOG_BY_ID = 'GET_DOG_BY_ID'
export const DELETE_DOG = 'DELETE_DOG'
export const POST_DOG = 'POST_DOG'
export const FILTER = 'FILTER'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS'
export const FILTER_PESO = 'FILTER_PESO'
export const FILTER_API_DB = 'FILTER_API_DB'
export const FILTER_ALTURA = 'FILTER_ALTURA'
export const FILTER_YEAR = 'FILTER_YEAR'

export function getDogs() {
    
    return async function (dispatch) {
      
        try {
        
            const response = await axios("http://localhost:3001/dogs");

            return dispatch({
            type: "GET_DOGS",
            payload: response.data,
            });
        
        } catch (error) {
            alert("Error al requerir los perros")
        }

    };
}

export function getDogsByName(name) {

    return async function (dispatch) {
      
        try {
        
            const response = await axios(`http://localhost:3001/dogs/?name=${name}`);
        
            return dispatch({
                type: "GET_DOG_BY_NAME",
                payload: response.data,
            });
        
        } catch (error) {
            alert('Perro no encontrado')
        }
    };
}

export function getDogsById(id) {

    return async function (dispatch) {
      
        try {
        
            const response = await axios(`http://localhost:3001/dogs/${id}`);
        
            return dispatch({
                type: "GET_DOG_BY_ID",
                payload: response.data,
            });
        
        } catch (error) {
            alert(error.response.data.error)
        }
    };
}


export function deleteDog() {
    return {
        type: 'DELETE_DOG'
    }
}

export function getTemperaments() {
    return async function (dispatch) {

        try {
            
            const response = await axios(`http://localhost:3001/temperaments/api2`);

            return dispatch({
                type: 'GET_TEMPERAMENTS',
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }

    }
}

export function postDogs(info) {

    return async function (dispatch) {
      
        try {
        
            const response = await axios.post(`http://localhost:3001/dogs`, info);

            alert('Perro Creado exitosamente')

        
        } catch (error) {
            alert("Error al crear el Perro")
        }
    };
}

export function filter(orden) {

    return function (dispatch) {
      
        return dispatch({
            type: FILTER,
            payload: orden
        })
    };
}

export function filterPeso(orden) {

    return function (dispatch) {
      
        return dispatch({
            type: FILTER_PESO,
            payload: orden
        })
    };
}

export function filterAltura(orden) {
    return function (dispatch) {
      
        return dispatch({
            type: FILTER_ALTURA,
            payload: orden
        })
    };
}


export function filteryear(orden) {
    return function (dispatch) {
      
        return dispatch({
            type: FILTER_YEAR,
            payload: orden
        })
    };
}