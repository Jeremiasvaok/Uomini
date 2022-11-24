import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import NavBar from '../NavBar'
import { getProducts } from '../../Redux/Actions'
import imagenNeon from '../../img/pantalon.png'
import styles from './home.module.css'

const Landing = ()=>{
    return(
        <>
        <div>
            <NavBar/>
        </div>
        <div>
            <img className={styles.imagePant} src={imagenNeon} alt='pantalon'/>
        </div>

        </>
    )
}

export default Landing