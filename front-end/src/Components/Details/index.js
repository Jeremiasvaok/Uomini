import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetails } from "../../Redux/Actions"

const  Details= () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state => state.getDetails)  
  console.log(id)
  useEffect(()=>{
    dispatch(getDetails(id))
  },[dispatch])

    return(
        <div>
       <h1>name:{details.name}</h1>
        </div>
    )
}

export default Details 