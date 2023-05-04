import logo from './logo.svg';
import './App.css';
import First from './components/firstscreen' 
import Second from './components/Secondscreen'
import MyForm from './components/helper/Form.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
 
  return (
    < div className="app">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<First/>}/>
        <Route path ="/details" element= {<Second/>}/>
        <Route exact path='/details/book' element = {<MyForm/>}/>
      </Routes>
    </BrowserRouter>   
    
      
    </div>
  );
}

export default App;
