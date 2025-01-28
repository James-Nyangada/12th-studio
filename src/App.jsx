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
import SocialMedia from "./components/SocialMedia";
import Consultancy from "./components/Consultancy";
import CoachingTraining from "./components/CoachingTraining";

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
        <Route path="/social-media" element={<SocialMedia/>} />
        <Route path="/consultations" element={<Consultancy/>} />
        <Route path="/coaching-and-training" element={<CoachingTraining/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
