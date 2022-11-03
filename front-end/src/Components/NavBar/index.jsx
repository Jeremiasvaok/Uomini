import { Link } from "react-router-dom"
import styles from './navbar.module.css'

const NavBar = () => {

    return (
        <>
        <header>
            <div className={styles.contenedor_menu}>
                <div className={styles.menu}>
                    <nav>
                  <ul className={styles.conteiner}>
                    <li><Link to='/remeras'>Remeras</Link>
                    <ul>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                    </ul>
                    </li>

                    <li><Link to='/pantalones'>Pantalones</Link>
                    <ul>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                    </ul>
                    </li>

                    <li><Link to='/abrigos'>Abrigos</Link>
                    <ul>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                    </ul>
                    </li>

                    <li><Link to='/camisas'>Camisas</Link>
                    <ul>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                    </ul>
                    </li>

                    <li><Link to='/carro'>Carro</Link>
                    <ul>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                        <li>SubMenu</li>
                    </ul>
                    </li>
                </ul>
                </nav>
                </div>
            </div>
            </header>
        </>
    )
}

export default NavBar