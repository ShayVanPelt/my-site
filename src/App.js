import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Macros from './pages/macros';
import Strength from './pages/strength';
import User from './pages/user';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/macro" element={<Macros/>}/>
          <Route path="/strength" element={<Strength/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;