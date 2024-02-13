import NavBar from './Components/NavBar/NavBar';
import Power from './Components/Power/Power';
import Speed from './Components/Speed/Speed';
import Handling from './Components/Handling/Handling';
import Option from './Components/Option/Option';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Routers ,Routes ,Route } from 'react-router-dom';


function App() {
 return (
  <div>
    <Routers>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Power/>}/>
        <Route path='/speed' element={<Speed/>}/>
        <Route path='/handling' element={<Handling/>}/>
        <Route path='/option' element={<Option/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Routers>
  </div>
 );
}

export default App
