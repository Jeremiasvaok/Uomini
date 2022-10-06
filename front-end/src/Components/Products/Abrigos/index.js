import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getAbrigos } from '../../../Redux/Actions'
import Card from '../../Card'

const Abrigos = ()=>{

    const dispatch = useDispatch()
    const abrigos = useSelector( state => state.getAbrigos)
 
    useEffect(()=>{
        dispatch(getAbrigos())
    })
    console.log(abrigos)
    return(
        <div>
         <div>{
            !abrigos.length > 0 ? (<h1>No hay nada</h1>) :  abrigos && abrigos.map((p)=>{
                return(
            <div key={p.id}>
                <Card
                 id= {p._id}
                 name ={p.name}
                 description= {p.description}
                 price= {p.price}
                 image= {p.image}
                 season= {p.season.seasons}
                 count= {p.count}
                 category= {p.category}
                 color= {p.color}
                />
            </div>  
        )})
    }
        
         </div>
        </div>
    )
}

export default Abrigos 