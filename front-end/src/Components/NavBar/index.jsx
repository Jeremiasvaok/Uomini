import { AppBar, Toolbar, makeStyles} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    ul:{
        listStyleType: 'none',
    },
    lista:{
        color: 'black',
        listStyle: 'none',
        float: 'left',
        textAlign: 'center',
        width: '5em',
    }
}))

const NavBar = () => {
    const classes = useStyles()
    return (                                                          
        <div>
            <AppBar>
                <Toolbar>
                    <ul className={classes.ul} >
                    <Link to='/remeras'><li className={classes.lista}>Remeras</li></Link>
                    <Link to='/pantalones'><li className={classes.lista}>Pantalones</li></Link>
                    <Link to='/abrigos'><li className={classes.lista}>Abrigos</li></Link>
                    <Link to='/camisas'><li className={classes.lista}>Camisas</li></Link>
                    <Link to='/carro'><li className={classes.lista}>Carro</li></Link>    
                    </ul>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar