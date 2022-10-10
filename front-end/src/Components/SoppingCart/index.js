import { useDispatch, useSelector } from "react-redux"


const ShoppingCart = () =>{
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
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