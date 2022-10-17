import {
  GET_ABRIGOS,
  GET_CAMISAS,
  GET_REMERAS,
  GET_PANTALONES,
  GET_DETAIL,
  ADD_TO_CART,
  DELETE_CART,
  REMOVE_ALL_FROM_CART,
  GET_ALL_PRODUCTS,
  GET_FAVORITES,
  SIGNIN_ADMIN
} from '../Actions'

const initialState = {
  getAllProducts: [],
  getAbrigos: [],
  getCamisas: [],
  getRemeras: [],
  getPantalones: [],
  getDetails: [],
  cart: [],
  signInAdmin:[],
  deletecart:[]


};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        getAllProducts: action.payload
      }
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
      return {
        ...state,
        getDetails: action.payload
      }
    case ADD_TO_CART:
        return{
          ...state,
          cart: action.payload
        }
    // case REMOVE_ALL_FROM_CART:
    //   return {
    //     ...state,
    //     cart: state.cart.find((item) => item.id !== action.payload)

    //   }
    case DELETE_CART:
      return {
        ...state,
        deletecart: action.payload,
        cart: state.cart.filter((item) => item.id !== action.payload)
      }
    case GET_FAVORITES:
      return{
        ...state,
        cart: action.payload
      }
    case SIGNIN_ADMIN:
      return{
        ...state,
        signInAdmin: action.payload
      }
    default:
      return state
  }
}

export default rootReducer