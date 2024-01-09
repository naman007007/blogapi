import React, { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes } from 'react-router-dom';

import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './home';
import Login from './login';
import Signup from './sign';
import Post from './post';

const Routee = () => {
    return(
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route> 
            <Route path='/post' element={<Post></Post>}></Route> 
        </Routes>
    </Router>
    </>
    );
};
export default Routee;
