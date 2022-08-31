import { useState } from 'react';
// import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import styles from "./App.css"
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [hikingTrails, setHikingTrails] = useState()
  return (
    <>
    <Header/>

    <h1>Trailmix'd </h1>
    <h2>Sign up to review your first hike!</h2>
    {/* <Hero hikingTrails={hikingTrails} setHikingTrails={setHikingTrails}/> */}
    <Home/>
    </>
  );
}

export default App;
