import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Home from "./pages/Home";
import ListOfTrails from "./pages/ListOfTrails";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}></Route>
          <Route path="/trails" element={<ListOfTrails />}>
            Locations
          </Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
