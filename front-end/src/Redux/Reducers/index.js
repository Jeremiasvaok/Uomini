import { GET_ABRIGOS } from '../Actions'

const initialState={
  getAbrigos:[]
  
  };
  function rootReducer(state= initialState, action){
    switch (action.type) {
      case GET_ABRIGOS:
         return{
          ...state,
          getAbrigos: console.log(action.payload)
         }
    
      default:
        return state
    }
  }

  export default rootReducer