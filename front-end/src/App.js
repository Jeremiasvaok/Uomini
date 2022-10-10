import { Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Abrigos from './Components/Products/Abrigos'
import Camisas from './Components/Products/Camisas'
import Pantalones from './Components/Products/Pantalones'
import Remeras from './Components/Products/Remeras'
import Details from './Components/Details'

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
       <Route exact path='/' element />
       <Route exact path='/remeras' element={<Remeras />} />
       <Route exact path='/pantalones' element={<Pantalones />}/>
       <Route exact path='/abrigos' element={<Abrigos />} />
       <Route exact path='/camisas' element={<Camisas/>}/>
       <Route exact path='/details/:id' element={<Details/>} />
    </Routes>
    </div>
  );
}

export default App;
