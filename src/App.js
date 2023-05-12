import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Offer from "./Components/Offer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/program" element={ <Offer/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
