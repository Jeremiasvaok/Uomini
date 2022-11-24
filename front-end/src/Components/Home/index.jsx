import NavBar from '../NavBar'
import { Link} from 'react-router-dom'
import imagenNeon from '../../img/pantalon.png'
import styles from './home.module.css'

const Landing = ()=>{
    return(
        <>
        <div>
            <NavBar/>
        </div>
        <div>
            <Link to='/pantalones'><img className={styles.imagePant} src={imagenNeon} alt='pantalon'/></Link>
        </div>

        </>
    )
}

export default Landing