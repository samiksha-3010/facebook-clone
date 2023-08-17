import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import UpdateProfile from './Component/UpdateProfile';
import CreatePost from './Component/CreatePost';
import { MyPost } from './Component/MyPost';
import CreateMyPost from './Component/CreateMyPost';
import EditProfile from './Component/EditProfile';




function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route exact path='/'element={<Home/>}/>
        <Route exact path='/Register'element={<Register/>}/>
        <Route exact path='/login'element={<Login/>}/>
        <Route exact path='/create-post'element={<CreatePost/>}/>
        <Route exact path='/updateprofile'element={<UpdateProfile/>}/>
        <Route exact path='/my-post'element={<MyPost/>}/>
        <Route exact path='/create-my-post'element={<CreateMyPost/>}/>
        <Route exact path='/editprofile'element={<EditProfile/>}/>
        
      </Routes>
    
    
    

    

    
      

     
    </div>
  );
}

export default App;
