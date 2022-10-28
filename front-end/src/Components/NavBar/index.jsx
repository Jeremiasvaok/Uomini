
import { Link } from "react-router-dom"

const NavBar = () => {
   
    return (                                                          
        <div>
            <header>
                <div>
                    <ul>
                    <Link to='/remeras'><li>Remeras</li></Link>
                    <Link to='/pantalones'><li>Pantalones</li></Link>
                    <Link to='/abrigos'><li>Abrigos</li></Link>
                    <Link to='/camisas'><li>Camisas</li></Link>
                    <Link to='/carro'><li>Carro</li></Link>    
                    </ul>
                </div>
            </header>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar