import "./App.css";
import Navbar from "./layout/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Slide from "./pages/Campaign/Slider";
import Contact from "./pages/Contact/Contact";
import MenuContainer from "./pages/Menu/MenuContainer";

function App() {
  return (
    <div className="bg-bg min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slide" element={<Slide />} />
        <Route path="/menu" element={<MenuContainer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
