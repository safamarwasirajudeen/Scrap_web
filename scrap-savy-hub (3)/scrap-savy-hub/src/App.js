import React,{useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route,Navigate} from "react-router-dom"
import Home from './Pages/Home';
import Viewprice from './Pages/Viewprice'
import Registration from './Components/Registration';
import Login from './Components/Login'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div>
      <Navbar />
      <Routes>
         <Route exact path='/' element={<Home />}/>
         <Route path='/registration' element={<Registration/>} />
         <Route
          path="/login"
          element={
            !authenticated ? (
              <Login setAuthenticated={setAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         { <Route path='/viewprice' element={<Viewprice/>} />
         /* <Route
          path="/viewprice"
          element={
            authenticated ? (
              <Viewprice />
             ) : (
                 <Navigate to="/login" />
            )
          }
        /> */}
        {<Route path='/login' element={<Login/>} />}
      </Routes>
    </div>
  );
}

export default App;