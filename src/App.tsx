import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navegation";

import About from "./components/pages/About";
import ReservationForm from "./components/Home/ReservationForm";
import Footer from "./components/Layout/Footer";
import  Home  from "./components/Home/Home";
import Menu from "./components/Services/Menu";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/Layout/Contact";
import AOSInit from "./components/ui/AOSInit";
import ScrollToTop from "./components/ui/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <AOSInit />
      <div className="min-h-screen flex flex-col pt-20">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reserve" element={<ReservationForm />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

       <Footer/>
      </div>
    </Router>
  );
}

export default App;

