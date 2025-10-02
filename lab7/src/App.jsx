import { BrowserRouter as Router, Routes, Route, NavLink  } from "react-router-dom";
import Home from "./Home.jsx";
import GoodsGallery from "./GoodsGallery.jsx";

function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Головна
          </NavLink>
          {" | "}
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Галерея товарів
          </NavLink>
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
