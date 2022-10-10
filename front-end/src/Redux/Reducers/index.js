import { GET_ABRIGOS, GET_CAMISAS, GET_REMERAS, GET_PANTALONES, GET_DETAIL} from '../Actions'

const initialState = {
  getAbrigos: [],
  getCamisas: [],
  getRemeras: [],
  getPantalones: [],
  getDetails:[],

};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ABRIGOS:
      return {
        ...state,
        getAbrigos: action.payload
      }
    case GET_CAMISAS:
      return {
        ...state,
        getCamisas: action.payload
      }
    case GET_REMERAS:
      return {
        ...state,
        getRemeras: action.payload
      }
    case GET_PANTALONES:
      return {
        ...state,
        getPantalones: action.payload
      }
      case GET_DETAIL:
        return{
          ...state,
          getDetails: action.payload
        }
    default:
      return state
  }
}

export default rootReducer