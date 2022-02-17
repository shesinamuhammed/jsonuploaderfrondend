import React from 'react';
import {BrowserRouter, Route, Routes, useLocation,Navigate, Outlet} from 'react-router-dom'
import './App.css';
import Home from './home';
import Login from './login';

import Register from './register';



export default function App() {

  
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Register/>}/>
               
                <Route path="/login" element={<Login/>}/>

      
                <Route element={<RequireAuth/>}>
                <Route path="/home" element={<Home isLoggedIn={true} />}/>
             
          </Route>

          
                </Routes>
            </BrowserRouter>
        </div>
    );
}


 function Us() {
  return (
      <div>
          us
      </div>
  )
}

function RequireAuth() {
    let location = useLocation();
    const loggedIn = localStorage.getItem("token")

    if (!loggedIn) {
        return <Navigate to={"/login"} state={{from: location}}/>;
    }

    return <Outlet/>;
}





