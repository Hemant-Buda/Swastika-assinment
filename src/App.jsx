import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import ArtPage from "./Pages/Art/ArtPage";
import DramaPuppetryPage from "./Pages/Darama/DramaPuppetryPage";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollTop/ScrollTop";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import Footer from "./Components/Footer/Footer";
function App() {
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div ref={parent}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/drama-puppetry" element={<DramaPuppetryPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
