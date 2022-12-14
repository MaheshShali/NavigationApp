import Home from "./Home";
import "./styles.css";
import About from "./About";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Blog from "./Blog";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="List">
          <div className="ListItems">
            <div>
              <Link to="/Home">Home</Link>
            </div>
            <div>
              <Link to="/About">About</Link>
            </div>
            <div>
              <Link to="/Blog">Blog</Link>
            </div>
          </div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
