import "./App.css";
import Encrypt from "./components/Encrypt";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./style/style.css";

function App() {
  return (
    <>
      <div className="container-navbar">
        <div className="navbar">
          <a href="/">Home</a>
          <a href="/encrypt">Encrypt</a>
          <a href="/decrypt">Decrypt</a>
          <a href="/about">About</a>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encrypt" element={<Encrypt method="encrypt" />} />
          <Route path="/decrypt" element={<Encrypt method="decrypt" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
