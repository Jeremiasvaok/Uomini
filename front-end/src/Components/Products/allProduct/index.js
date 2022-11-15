import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../Redux/Actions'
import { useEffect} from 'react'
import Card from '../../Card'

function AllProducts(){
    const dispatch = useDispatch()
    const allProduct = useSelector(state => state.getAllProducts)
    
    useEffect(()=>{
        dispatch(getProducts())
    }, [dispatch])
    return(
     <div>
       <div>{
        !allProduct.length > 0 ? (<h1>No hay nada</h1>) : allProduct && allProduct?.map((p) =>{
            return (
                <div key={p.id}>
                    <Card
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        price={p.price}
                        image={p.image}
                        season={p.season}
                        count={p.count}
                        category={p.category}
                        color={p.color}
                    />
                </div>
            )
        })
        }</div>
     </div>
    )
}

export default AllProducts