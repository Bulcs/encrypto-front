import "./App.css";
import Encrypt from "./components/Encrypt";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style/style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-navbar">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/encrypt">Encrypt</Link>
          <Link to="/decrypt">Decrypt</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encrypt" element={<Encrypt method="encrypt" />} />
        <Route path="/decrypt" element={<Encrypt method="decrypt" />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer className="container-git-links">
        <div className="git-links">
          <a
            href="https://github.com/Bulcs/encrypto-back"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend GitHub
          </a>
          <a
            href="https://github.com/Bulcs/encrypto-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend GitHub
          </a>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
