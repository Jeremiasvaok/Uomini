import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Abrigos from './Components/Products/Abrigos'
import Camisas from './Components/Products/Camisas'
import Pantalones from './Components/Products/Pantalones'
import Remeras from './Components/Products/Remeras'
import Details from './Components/Details'
import MapFavorite from './Components/SoppingCart/mapFavorite.js'
import SignIn from './Components/From';
import AllProducts from './Components/Products/allProduct';

function App() {
  return (
    <div className="App">
      <Home />
      <hr/>
      <hr />
      <Routes>
       {/* <Route exact path='/' element /> */}
       <Route exact path='/remeras' element={<Remeras />} />
       <Route exact path='/pantalones' element={<Pantalones />}/>
       <Route exact path='/abrigos' element={<Abrigos />} />
       <Route exact path='/camisas' element={<Camisas/>}/>
       <Route exact path='/details/:detailsId' element={<Details/>} />
       <Route exact path='/signIn' element={<SignIn/>} />
       <Route exact path='/carro' element={<MapFavorite />} />
       <Route exact path='/search' element={<AllProducts />} />
    </Routes>
    </div>
  );
}

export default App;
