import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

function Navbar() {

  const [ isOpen, setIsOpen]=useState(false);

  const toggleNavbar=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-16 p-4 bg-yellow-950 shadow-3xl flex items-center justify-between text-white">
      <div className="text-2xl font-bold cursor-pointer">Flavours</div>

      <div className="md:hidden">
        <button onClick={toggleNavbar}><FaHamburger className="text-2xl"/></button>
      </div>

      <div className="md:flex gap-4 md:gap-40 mr-8 hidden">
        <Link
          to="/"
          className="text-xl cursor-pointer transition-all duration-300 
              hover:translate-y-0.5 hover:scale-130 hover:text-amber-800 hover:underline"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-xl cursor-pointer transition-all duration-300 
              hover:translate-y-0.5 hover:scale-130 hover:text-amber-800 hover:underline"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-xl cursor-pointer  transition-all duration-300 
              hover:translate-y-0.5 hover:scale-130 hover:text-amber-800 hover:underline"
        >
          Contact Us
        </Link>
      </div>

      {isOpen && (
  <div className="absolute top-16 left-0 w-full bg-yellow-900 flex flex-col items-center gap-6 py-6 md:hidden shadow-xl">

    <Link
      to="/"
      onClick={() => setIsOpen(false)}
      className="text-xl cursor-pointer transition-all duration-300 hover:text-amber-400"
    >
      Home
    </Link>

    <Link
      to="/about"
      onClick={() => setIsOpen(false)}
      className="text-xl cursor-pointer transition-all duration-300 hover:text-amber-400"
    >
      About
    </Link>

    <Link
      to="/contact"
      onClick={() => setIsOpen(false)}
      className="text-xl cursor-pointer transition-all duration-300 hover:text-amber-400"
    >
      Contact Us
    </Link>

  </div>
)}

    </div>
  );
}

export default Navbar;
