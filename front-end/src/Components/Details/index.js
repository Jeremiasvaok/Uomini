import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetails } from "../../Redux/Actions"

const  Details= () => {

  const {detailsId} = useParams()
  console.log(detailsId)
  const dispatch = useDispatch()
  const details = useSelector(state => state.getDetails)  
  useEffect(()=>{
    dispatch(getDetails(detailsId))
  },[dispatch])

    return(
        <div>
       <h1>name:{details.name}</h1>
        </div>
    )
}

export default Details 