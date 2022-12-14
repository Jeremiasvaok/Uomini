import axios from 'axios'
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const GET_ABRIGOS = 'GET_ABRIGOS';
export const GET_CAMISAS = 'GET_CAMISAS';
export const GET_PANTALONES = 'GET_PANTALONES';
export const GET_REMERAS = 'GET_REMERAS';
export const GET_DETAIL = 'GET_DETAIL';
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ONE_FROM_CART = 'REMOVE_ONE_FROM_CART'
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART'
export const DELETE_CART = 'DELETE_CART'
export const GET_FAVORITES = 'GET_FAVORITES'
export const SIGNIN_ADMIN = 'SIGNIN_ADMIN'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'


const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

// let token = null //`bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzQ4MzAzZWFjOWEzYmMxZDY2ZDlkMCIsImlhdCI6MTY2NTY4ODEyNiwiZXhwIjoxNjk3MjI0MTI2fQ.6RXTmHujZJQGn3Lm0-0u_h8flZdnWUNxv3UShykw8XQ`

let token = null
export const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

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
  const config = {
    headers : { Authorization: token },
  }
  console.log(config)
  const response = await instance.get('/remeras', config)
  console.log(response)
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

export const getFavorites = () => async(dispatch) =>{
  try{
  const config = {
    data:'hijo de puta',
    headers : { 
      Authorization: token,
      ContentType:"application/json",
    },
  }
   const response = await instance.get('/favorites/products', config)
   console.log(response.data)
   return dispatch({
    type: GET_FAVORITES,
    payload: response.data
   })
  }catch(error){
    alert(error)
    console.log(error)
  }
}

export const addToCart = (id) => async(dispatch) => {
  try {
  // const config= {
  //   data:'hijo de puta',
  //   headers : { Authorization: token },
  // }
  const response = await instance.post(`/product/favorite/${id}`, { 
    headers : { Authorization: token },
})
  console.log(response.data)
  return dispatch({
    type: ADD_TO_CART,
    payload: response.data
  })
  
} catch (error) {
  alert(error)
  console.log(error)
}
}
 addToCart()
// export const deleteFromCart = (id, ) => (dispatch) => {
//   all ?
//     dispatch({
//       type: REMOVE_ALL_FROM_CART,
//       payload: id
//     })
//     : dispatch({
//       type: REMOVE_ONE_FROM_CART,
//       payload: id
//     })
// }

// setToken()
export const deleteCart = (id) => async(dispatch) =>{
  try {
    const config = {
      headers: { Authorization: token },
    }
    const response = await instance.delete(`/productos/favorites/dalete/${id}`, config)
    console.log(response)
    return dispatch({
      type: DELETE_CART,
      payload: response.data.id
  
    })
  } catch (error) {
    alert('error aqui')
    console.log(error)
  }
  
}

export const signInAdmin = ( data) => async(dispatch) =>{
  const response = await instance.post('/signin/admin', data)
  return dispatch({
    type: SIGNIN_ADMIN,
    payload: response.data
  })
}

export const searchProduct = (name) => async(dispach)=>{
  try{
  const response = await instance.get(`/category-products?name=${name}`)
  console.log(response.data)
  return dispach({
    type: SEARCH_PRODUCT,
    payload: response.data
  })
}catch(error){
  console.log(error)
}
}

// setToken()