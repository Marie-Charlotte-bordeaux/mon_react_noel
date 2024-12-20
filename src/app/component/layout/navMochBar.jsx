import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useState } from "react";


const navLinks = [
  { path: "/", label: "Accueil" },
  { path: "/about", label: "À propos" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" }
]
export function NavMochBar ()  {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
//inverser le boolean pour afficher/cacher le menu
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (  
    <nav className="bg-gray-800 flex justify-between p-4 items-center relative">
    {/* Logo ou autre contenu à gauche */}
    <div className="text-white font-semibold text-xl">Mon Site</div>
    
    {/* Menu pour la version desktop */}
    <ul className="hidden md:flex space-x-6">
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className="text-white hover:text-pink-400 transition-colors duration-300"
          activeClassName="text-pink-500"
        >
          {link.label}
        </NavLink>
      ))}
    </ul>
    
    {/* Menu mobile */}
    <ul
      className={`bg-gray-900 text-pink-300 flex flex-col absolute top-12 left-0 w-full space-y-4 p-4 rounded-b-lg shadow-lg transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"} md:hidden`}
    >
      {navLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className="block text-lg text-white hover:text-pink-400 transition-colors duration-300"
          activeClassName="text-pink-500"
          onClick={() => setIsMenuOpen(false)} // Ferme le menu après clic sur un lien
        >
          {link.label}
        </NavLink>
      ))}
    </ul>

    {/* Bouton Menu pour mobile */}
    <button
      className="md:hidden text-white p-2"
      onClick={handleMenu}
    >
      <Menu className="w-6 h-6" />
    </button>
  </nav>
  );
};