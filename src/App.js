import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ListOfTrails from "./pages/ListOfTrails";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/trails" element={<ListOfTrails />}>
              Locations
            </Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;