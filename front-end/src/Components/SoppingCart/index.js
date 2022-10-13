import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFavorites, getProducts } from "../../Redux/Actions"


const ShoppingCart = () =>{
    const dispatch = useDispatch()
    const product = useSelector(state => state.getAllProducts)
    const cart = useSelector(state => state.cart)
    // const header = useSelector(state => state.signInAdmin)
     
    useEffect(()=>{
        dispatch(getFavorites())

    },[dispatch])
    return(
        <div>
            <h2>carro compreas</h2>
            <h3>Products</h3> 
             <article className="box"></article>
             <h3>Carrito</h3>
             <article className="box"></article>
        </div>
    )
}
export default ShoppingCart