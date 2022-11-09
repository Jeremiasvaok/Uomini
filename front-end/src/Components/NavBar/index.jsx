import { Link } from "react-router-dom"
import SearchBar from '../SearchBar'
import styles from './navbar.module.css'

// import FontAwesomeIcon from '@fortawesome/fontawesome-free'
//  import { SearchTwoTone}  from '@mui/icons-material';

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
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                    </ul>
                                </li>

                                <li><Link to='/pantalones'>Pantalones</Link>
                                    <ul>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li> 
                                    </ul>
                                </li>

                                <li><Link to='/abrigos'>Abrigos</Link>
                                    <ul>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                    </ul>
                                </li>

                                <li><Link to='/camisas'>Camisas</Link>
                                    <ul>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                        <li><a href='#'>SubMenu</a></li>
                                    </ul>
                                </li>

                                {/* <li><Link to='/carro'>Carro</Link>
                                <ul>
                                <li><a href='#'>SubMenu</a></li>
                                <li><a href='#'>SubMenu</a></li>
                                <li><a href='#'>SubMenu</a></li>
                                </ul>
                                </li> */}
                           <SearchBar  />
                            </ul>
                            

                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar