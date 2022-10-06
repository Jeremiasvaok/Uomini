import axios from 'axios'
export const GET_ABRIGOS = 'GET_ABRIGOS';

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