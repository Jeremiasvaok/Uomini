import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_ABRIGOS = 'GET_ABRIGOS';
export const GET_CAMISAS = 'GET_CAMISAS';
export const GET_PANTALONES = 'GET_PANTALONES';
export const GET_REMERAS = 'GET_REMERAS';
export const GET_DETAIL = 'GET_DETAIL';
export const ADD_TO_CARD = 'ADD_TO_CARD'
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

export const getProducts = () => async (dispatch)=>{
  const response = await instance.get('/products')
  return dispatch({
    type: GET_ALL_PRODUCTS,
    payload: response.data
  })
}
export const getAbrigos = () => async (dispatch) => {
  const response = await instance.get('/abrigos')
  return dispatch({
    type: GET_ABRIGOS,
    payload: response.data
  })
}

export const getCamisas = () => async (dispatch) => {
  const response = await instance.get('/camisas')
  return dispatch({
    type: GET_CAMISAS,
    payload: response.data
  })
}

export const getPantalones = () => async (dispatch) => {
  const response = await instance.get('/pantalones')
  return dispatch({
    type: GET_PANTALONES,
    payload: response.data
  })
}

export const getRemeras = () => async (dispatch) => {
  const response = await instance.get('/remeras')
  return dispatch({
    type: GET_REMERAS,
    payload: response.data
  })
}

export const getDetails = (id) => async (dispatch) => {
  const response = await instance.get(`/product/${id}`)
  return dispatch({
    type: GET_DETAIL,
    payload: response.data
  })
}

export const addToCart = (id) => (dispatch) => {
  return dispatch({
    type: ADD_TO_CARD,
    payload: id
  })
}

export const deleteFromCard = (id, all = false) => (dispatch) => {
  all ?
    dispatch({
      type: REMOVE_ALL_FROM_CART,
      payload: id
    })
    : dispatch({
      type: REMOVE_ONE_FROM_CART,
      payload: id
    })
}

export const clearCard = () => (dispatch) =>{
  return dispatch({
    type: CLEAR_CART
  })
}