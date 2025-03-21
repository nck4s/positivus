import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
//import AboutUs from "./pages/AboutUs/AboutUs";
//import Services from "./pages/Services/Services";
//import Pricing from "./pages/Pricing/Pricing";
//import Blog from "./pages/Blog/Blog";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Отключенные маршруты, пока файлы не созданы */}
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
