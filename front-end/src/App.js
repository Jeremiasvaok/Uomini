import { Route, Routes} from 'react-router-dom'
import Landing from './Components/Landing';
import Abrigos from './Components/Products/Abrigos'

function App() {
  return (
    <div className="App">
      <Landing />
      <Routes>
       <Route exact path='/' element />
       <Route exact path='/remeras' element />
       <Route exact path='/pantalones' element />
       <Route exact path='/abrigos' element={<Abrigos />} />
       <Route exact path='/camisas' element />
    </Routes>
    </div>
  );
}

export default App;
