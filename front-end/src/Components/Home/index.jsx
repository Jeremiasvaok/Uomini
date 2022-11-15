import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import NavBar from '../NavBar'
import { getProducts } from '../../Redux/Actions'

const Landing = ()=>{
    return(
        <div>
            <NavBar/>
        </div>
    )
}

export default Landing