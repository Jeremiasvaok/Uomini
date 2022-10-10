import { Link } from "react-router-dom"


const Card = ({ name, id, category, season, color, description, price, count, image }) => {
    return (
        <>
            <div>
               <Link to={`/details/${id}`}><img src={image} /></Link>
                <h1>{name}</h1>
                <h1>{price}</h1>
                <h1>{season}</h1>
            </div>
        </>
    )
}

export default Card