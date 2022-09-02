import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.css"

import Hero from './components/Hero';
import Header from './components/Header';
import Home from './pages/Home';
import ListOfTrails from './pages/ListOfTrails'

// let firebase = require('firebase');
// let firebaseui = require('firebaseui')

function App() {
  // const [hikingTrails, setHikingTrails] = useState()
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/listoftrails' element={<ListOfTrails />}/>
      {/* <Route path='about' element={<About />}/>
      <Route path='about' element={<About />}/> */}
    </Routes>
    
    </BrowserRouter>
{/* 
    <h1>Trailmix'd </h1> */}
    {/* <h2>Sign up to review your first hike!</h2> */}
    {/* <Hero hikingTrails={hikingTrails} setHikingTrails={setHikingTrails}/> */}
    </>
  );
}

export default App;
