import { Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About.js";
import { Blog } from "./pages/Blog.js";
import { Contact } from "./pages/Contact.js";
import { Home } from "./pages/Home.js";
import "./localStroge/style.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="uls">
          <ul>
            <li>
              <Link to={"/"}>Forms</Link>
            </li>
            <li>
              <Link to={"/about"}>Table</Link>
            </li>
            <li>
              <Link to={"/blog"}>Like</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
