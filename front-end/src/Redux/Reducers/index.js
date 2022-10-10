import {
  GET_ABRIGOS,
  GET_CAMISAS,
  GET_REMERAS,
  GET_PANTALONES,
  GET_DETAIL,
  ADD_TO_CARD,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  GET_ALL_PRODUCTS,

} from '../Actions'

const initialState = {
  getAllProducts: [],
  getAbrigos: [],
  getCamisas: [],
  getRemeras: [],
  getPantalones: [],
  getDetails: [],
  cart: [],

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
    case ADD_TO_CARD:
      let newIten = state.getAllProducts.find((product) => product.id === action.payload)
      let itemInCart = state.cart.find((item) => item.id === newIten.id)
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === newIten.id
            ? { ...item, quantity: itemInCart.quantity + 1 } : item
        ),
      }
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.find((item) => item.id === action.payload)

      }
    case REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload)
      return itemToDelete.quantity > 1
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newIten.id
              ? { ...item, quantity: itemInCart.quantity + 1 } : item
          ),
        } : {
          ...state,
          cart: state.cart.find((item) => item.id === action.payload)
        }
      }
    case CLEAR_CART:
      return {
        initialState

      }
    default:
      return state
  }
}

export default rootReducer