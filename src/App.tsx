import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navegation";
import Hero from "./components/Home/Hero";
import About from "./components/pages/About";
import ReservationForm from "./components/Home/ReservationForm";
import Footer from "./components/Layout/Footer";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-20">
        <Navigation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
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

