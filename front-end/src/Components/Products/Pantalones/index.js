import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPantalones } from "../../../Redux/Actions"
import Card from "../../Card"

const Pantalones = () => {

    const dispatch = useDispatch()
    const pantalon = useSelector(state => state.getPantalones)
    useEffect(() => {
        dispatch(getPantalones())
    }, [dispatch])

    return (
        <div>
            <div>{
                !pantalon > 0 ? (<h1>No hay nada</h1>) : pantalon && pantalon?.map(p => {
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

export default Pantalones