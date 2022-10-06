import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                   <Link to='/remeras'><ul>Remeras</ul></Link> 
                   <Link to='/pantalones'><ul>Pantalones</ul></Link> 
                   <Link to='/abrigos'><ul>Abrigos</ul></Link> 
                   <Link to='/camisas'><ul>Camisas</ul></Link> 
                </nav>
            </header>
        </div>
    )
}

export default Header