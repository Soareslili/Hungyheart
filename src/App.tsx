import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navegation";

import About from "./components/pages/About";
import ReservationForm from "./components/Home/ReservationForm";
import Footer from "./components/Layout/Footer";
import  Home  from "./components/Home/Home";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-20">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reserve" element={<ReservationForm />} />
          </Routes>
        </main>

       <Footer/>
      </div>
    </Router>
  );
}

export default App;

