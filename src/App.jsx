import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyWork from "./components/Mywork";
import Navbar from "./components/Nav";
import Services from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";
import SocialMediaManagement from "./components/SocialMediaManagement";
import Consultations from "./components/Consultations";
import Coaching from "./components/Coaching";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/social-media-management"
          element={<SocialMediaManagement />}
        />
        <Route path="/services/consultations" element={<Consultations />} />
        <Route path="/services/coaching" element={<Coaching />} />
        <Route path="/portfolio" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
