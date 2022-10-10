import axios from 'axios'
export const GET_ABRIGOS = 'GET_ABRIGOS';
export const GET_CAMISAS = 'GET_CAMISAS';
export const GET_PANTALONES = 'GET_PANTALONES';
export const GET_REMERAS = 'GET_REMERAS';
export const GET_DETAIL = 'GET_DETAIL';

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});
export const getAbrigos = () => async (dispatch) =>{
    const response = await instance.get('/abrigos')
     return dispatch({
        type: GET_ABRIGOS,
        payload: response.data
     })
}

export const getCamisas = () => async (dispatch)=>{
  const response = await instance.get('/camisas')
  return dispatch({
    type: GET_CAMISAS,
    payload: response.data
  })
}

export const getPantalones = () => async (dispatch)=>{
  const response =  await instance.get('/pantalones')
  return dispatch({
    type: GET_PANTALONES,
    payload: response.data
  })
}

export const getRemeras = () => async (dispatch)=>{
   const response = await instance.get('/remeras')
   return dispatch({
    type: GET_REMERAS,
    payload: response.data
   })
}

export const getDetails = (id) => async(dispatch)=>{
  const response = await instance.get(`/product/${id}`)
  return dispatch({
    type: GET_DETAIL,
    payload: response.data
  })
}