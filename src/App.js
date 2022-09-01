import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./App.css"

import Hero from './components/Hero';
import Header from './components/Header';
import Home from './pages/Home';
import Welcome from './pages/Welcome';


function App() {
  const [hikingTrails, setHikingTrails] = useState()
  return (
    <>
    <Header/>
{/* 
    <h1>Trailmix'd </h1> */}
    {/* <h2>Sign up to review your first hike!</h2> */}
    {/* <Hero hikingTrails={hikingTrails} setHikingTrails={setHikingTrails}/> */}
    {/* <Home/> */}
    <Welcome/>
    </>
  );
}

export default App;
