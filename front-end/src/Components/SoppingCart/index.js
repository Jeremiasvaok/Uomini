//import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCart } from "../../Redux/Actions"



const ShoppingCart = ({name, id, category, color, description, price, image }) =>{
     const dispatch = useDispatch()
    // const product = useSelector(state => state.getAllProducts)
   
    const handleDeleteFav = (id)=>{
        dispatch(deleteCart(id))
        console.log(id)
    }
    return(
        <div>
              <h4>{name}</h4>
              <img src={image} />
              <button onClick={()=> handleDeleteFav(id)}>delete</button>
        </div>
    )
}
export default ShoppingCart