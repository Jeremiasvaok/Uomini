import { Link } from "react-router-dom"
import styles from './navbar.module.css'

const NavBar = () => {
   
    return (                                                          
        <div>
            <header>
                <div>
                    <ul className={styles.conteiner}>
                    <Link to='/remeras'><li>Remeras</li></Link>
                    <Link to='/pantalones'><li>Pantalones</li></Link>
                    <Link to='/abrigos'><li>Abrigos</li></Link>
                    <Link to='/camisas'><li>Camisas</li></Link>
                    <Link to='/carro'><li>Carro</li></Link>    
                    </ul>
                </div>
            </header>
            <div></div>
        </div>
    )
}

export default NavBar