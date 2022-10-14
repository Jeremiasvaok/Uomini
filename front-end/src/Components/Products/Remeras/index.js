import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRemeras } from "../../../Redux/Actions"
import Card from "../../Card"

const Remeras = () => {

    const dispatch = useDispatch()
    const remeras = useSelector(state => state.getRemeras)

    useEffect(() => {
        dispatch(getRemeras())
    }, [dispatch])

    return (
        <div>
            <div>{
                !remeras > 0 ? (<h1>No hay nada</h1>) : remeras && remeras?.map((p) => {
                    return (
                        <div key={p._id}>
                            <Card
                                id={p._id}
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

export default Remeras