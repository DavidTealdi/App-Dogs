import { DELETE_DOG, GET_DOGS, GET_DOG_BY_ID, GET_DOG_BY_NAME, FILTER, GET_TEMPERAMENTS, FILTER_PESO, FILTER_ALTURA, FILTER_YEAR} from "../actions";

let initialState = {
  allDogs: [],
  dogcopy: [],
  dogDetail: [],
  temperaments: [],
  filters: false
};



function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case GET_DOGS:
      return {
        ...state,
        allDogs: [...action.payload],
        dogcopy: action.payload
      };
    
    case GET_DOG_BY_NAME:
    return {
      ...state,
      allDogs: action.payload
    };
    
    case GET_DOG_BY_ID: 
    return {
      ...state,
      dogDetail: action.payload,
    }
    
    case DELETE_DOG: 
    return {
      ...state,
      dogDetail: []
    }
    
    case FILTER:
      if(action.payload === 'asc') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.name > next.name) return -1
            if(prev.name < next.name) return 1
            return 0
          })
        }
      
      } else if(action.payload === 'dct') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.name > next.name) return 1
            if(prev.name < next.name) return -1
            return 0
          })
        }
      }
    break;

    case FILTER_PESO:
      if(action.payload === 'asc') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.weight > next.weight) return -1
            if(prev.weight < next.weight) return 1
            return 0
          })
        }
      
      } else if(action.payload === 'dct') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.weight > next.weight) return 1
            if(prev.weight < next.weight) return -1
            return 0
          })
        }
      }
    break;

    case FILTER_ALTURA:
      if(action.payload === 'asc') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.height > next.height) return -1
            if(prev.height < next.height) return 1
            return 0
          })
        }
      
      } else if(action.payload === 'dct') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.height > next.height) return 1
            if(prev.height < next.height) return -1
            return 0
          })
        }
      }
    break;

    case FILTER_YEAR:
      if(action.payload === 'asc') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.lifeSpan > next.lifeSpan) return -1
            if(prev.lifeSpan < next.lifeSpan) return 1
            return 0
          })
        }
      
      } else if(action.payload === 'dct') {

        return {
          ...state,
          filters: true,
          allDogs: [...state.allDogs].sort((prev, next) => {
            if(prev.lifeSpan > next.lifeSpan) return 1
            if(prev.lifeSpan < next.lifeSpan) return -1
            return 0
          })
        }
      }
    break;
    
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload
      }
    
    default:
      return {...state};
  }
}

export default rootReducer;