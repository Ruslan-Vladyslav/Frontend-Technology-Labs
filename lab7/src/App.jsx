import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import GoodsGallery from "./GoodsGallery.jsx";

function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <nav>
          <Link to="/">Головна</Link> | <Link to="/gallery">Галерея товарів</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GoodsGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
