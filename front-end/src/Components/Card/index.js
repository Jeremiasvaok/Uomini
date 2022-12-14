import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart, setToken } from "../../Redux/Actions"

const Card = ({ name, id, category, season, color, description, price, count, image }) => {

    const dispatch = useDispatch()
    const { token } = useSelector(state => state.signInAdmin)
    //const userToken = token
    const handleFavCart = (id) => {
        dispatch(addToCart(id))
    }

    return (
        <>
            <div>
                <Link to={`/details/${id}`}><img src={image} /></Link>
                <h1>{name}</h1>
                <h1>{price}</h1>
                <h1>{season}</h1>
                <button 
                type='submit' 
                onClick={() => handleFavCart(id)}>Fav</button>
            </div>
        </>
    )
}

export default Card