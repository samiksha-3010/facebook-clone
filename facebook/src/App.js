import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Navbar from './Component/Navbar';



function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route exact path='/Register'element={<Register/>}/>
        <Route exact path='/login'element={<Login/>}/>

      </Routes>
    
    
    

    

    
      

     
    </div>
  );
}

export default App;
