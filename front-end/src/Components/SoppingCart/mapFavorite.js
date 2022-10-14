import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getFavorites } from "../../Redux/Actions"
import ShoppingCart from './index'

const MapFavorite = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    console.log(cart,'CAET')
    console.log(cart.name)
    useEffect(()=>{
        dispatch(getFavorites())
    },[dispatch])
    return (
        <div>
            <div>{
                !cart.length > 0 ? (<h1>No hay nada</h1>) : cart && cart.map((p) => {
                    return (
                        <div key={p._id}>
                            <ShoppingCart
                                id={p._id}
                                name={p.name}
                                description={p.description}
                                price={p.price}
                                image={p.image}
                                category={p.category}
                                color={p.color}
                            />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default MapFavorite