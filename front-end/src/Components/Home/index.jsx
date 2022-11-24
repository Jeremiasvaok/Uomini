import NavBar from '../NavBar'
import { Link} from 'react-router-dom'
import imagenNeonRemera from '../../img/imagenneonpantalon.png'
import imagenNeonPantalon from '../../img/pantalon.png'

import styles from './home.module.css'

const Landing = ()=>{
    return(
        <>
        <div>
            <NavBar/>
        </div>
        <div>
            <Link to='/pantalones'><img className={styles.imagePant} src={imagenNeonPantalon} alt='pantalon'/></Link>
        </div>
        <div>
            <Link to='/remeras'><img className={styles.imagePant} src={imagenNeonRemera} alt='remeras'/></Link>
        </div>
        
        </>
    )
}

export default Landing