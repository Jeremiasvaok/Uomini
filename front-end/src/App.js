import { Route, Routes} from 'react-router-dom'
import Landing from './Components/Landing';


function App() {
  return (
    <div className="App">
      <Routes>
       <Route exact path='/' element={<Landing />} />
       <Route exact path='/remeras' element />
       <Route exact path='/pantalones' element />
       <Route exact path='/abrigos' element />
       <Route exact path='/camisas' element />
    </Routes>
    </div>
  );
}

export default App;
