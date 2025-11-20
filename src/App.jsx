import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
