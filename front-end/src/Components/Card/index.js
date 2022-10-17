import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addToCart } from "../../Redux/Actions"


const Card = ({ name, id, category, season, color, description, price, count, image }) => {
    
    const dispatch = useDispatch
    const handleFavCart = (id)=>{
      dispatch(addToCart(id))
    }
    return (
        <>
            <div>
               <Link to={`/details/${id}`}><img src={image} /></Link>
                <h1>{name}</h1>
                <h1>{price}</h1>
                <h1>{season}</h1>
                <button type='submit' onClick={() => handleFavCart(id)} className='botonn1'>Fav</button>
            </div>
        </>
    )
}

export default Card