import React from 'react';
import { Routes,Route } from 'react-router-dom';
import ContactUs from './Componets/ContactUs';
import Header from './Componets/Header';
import Home from './Componets/Home';
import Event from './Componets/Event';
import Blog from './Componets/Blog';
import SignIn from './Componets/SignIn';
import SignUp from './Componets/SignUp';


// import './App.css';


function App() {
  return (
    
    <>
    
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path="/event" element={<Event/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>

      
    </>
  );
}

export default App;
