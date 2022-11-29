
import './App.css';
// import Auth from './components/auth/Auth';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom'
import Card from './components/card/Card';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import AddBlog from './components/addBlog/AddBlog';
import AdduserBlog from './components/adduserBlog/AdduserBlog';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Card/> */}
      <Routes>
        {/* <Route path='/auth' element={<Auth />}/> */}
        <Route path='/' element={<Card/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/yourblog' element={<AddBlog/>}/>
        <Route path='/adduserblog' element={<AdduserBlog/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
