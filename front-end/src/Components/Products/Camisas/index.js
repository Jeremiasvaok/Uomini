import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCamisas } from "../../../Redux/Actions"
import Card from "../../Card"

const Camisas = ()=>{
   const dispatch = useDispatch()
   const camisas = useSelector( state => state.getCamisas)
   
    useEffect(() =>{
    dispatch(getCamisas())
   }, [dispatch])

   return(
    <div>
     <div>{
        !camisas > 0 ? (<h1>No hay nada</h1>) : camisas && camisas?.map((p) =>{
            return(
                <div key={p.id}>
                    <Card
                     id={p.id}
                     name ={p.name}
                     description={p.description}
                     price={p.price}
                     image={p.image}
                     season={p.season}
                     count={p.count}
                     category={p.category}
                     color={p.color}
                    />
                </div>  
        )})
}</div>
    </div>
   )
}
export default Camisas