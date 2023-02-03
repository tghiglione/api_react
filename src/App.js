import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/api_react/' element={<Home/>}/>
          <Route path='/list' element={<ItemListContainer/>}/>
          <Route path="/detail/:idCharacter" element={<ItemDetailContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
