import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LoggedInPage from './components/Footer';
import Header from './components/Header'

function App() {
  const [hikingTrails, setHikingTrails] = useState()
  return (
    <>
    <h1>Trailmix'd </h1>
    <h2>Sign up to review your first hike!</h2>
    {/* <h2 onClick={Sign Up} </h2> */}
    // <Hero hikingTrails={hikingTrails} setHikingTrails={setHikingTrails}/>
    </>
  );
}

export default App;
