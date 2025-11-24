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
    </BrowserRouter>
  );
}

export default App;
