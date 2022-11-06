import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { successMsg } from './services/feedBackService';
import Footer from './components/Footer';
import About from './components/About';
import NotFound from './components/NotFound';
import CardCreation from './components/AddCard';
import Cards from './components/Cards';
import AddCard from './components/AddCard';
import EditCard from './components/EditCard';
import Contact from './components/Contact';



function App() {
  return (

    <Router>
             <Navbar/>

             
    <Routes>
        <Route path="/" element = {<Home/>}> </Route>
        <Route path="/home" element = {<Home/>}> </Route>
        <Route path="/about" element = {<About/>}> </Route>
        <Route path="/login" element = {<Login/>}> </Route>
        <Route path="/register" element = {<Register/>}> </Route>

        <Route path='/cards'>
              <Route index  element = {<Cards/>} ></Route>
              <Route path='add' element = {<AddCard/>}></Route>
              <Route path='edit/:id' element = {<EditCard/>}></Route>
      </Route>

      <Route path="/contact" element = {<Contact/>}> </Route>


      <Route path='*' element={<NotFound/>}/>



    </Routes>
    <Footer/>
    </Router>


  );
}

export default App;
