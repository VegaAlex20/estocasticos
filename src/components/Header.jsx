import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-slate-900 border-b border-slate-700/50 backdrop-blur-sm">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          
          <Link to="/" className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-slate-900 font-bold text-xl">∫</span>
                </div>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold tracking-tight">
                  Simulador <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Estocástico</span>
                </h1>
                <p className="text-slate-400 text-xs tracking-wide">Procesos aleatorios</p>
              </div>
            </div>
          </Link>

          {/* Menú de navegación desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" icon="⌂">Inicio</NavLink>
            <NavLink to="/poisson" icon="λ">Poisson</NavLink>
            <NavLink to="/markov" icon="⟳">Markov</NavLink>
            <NavLink to="/colas" icon="⧖">Colas</NavLink>
          </nav>

          {/* Botón mobile con animación */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

        </div>

        {/* Menú mobile desplegable */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-1 pt-2">
            <MobileNavLink to="/" icon="⌂" onClick={() => setIsMenuOpen(false)}>Inicio</MobileNavLink>
            <MobileNavLink to="/poisson" icon="λ" onClick={() => setIsMenuOpen(false)}>Poisson</MobileNavLink>
            <MobileNavLink to="/markov" icon="⟳" onClick={() => setIsMenuOpen(false)}>Markov</MobileNavLink>
            <MobileNavLink to="/colas" icon="⧖" onClick={() => setIsMenuOpen(false)}>Colas</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Componente NavLink para desktop
const NavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="group relative px-4 py-2 text-slate-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-slate-800/50"
  >
    <span className="flex items-center space-x-2">
      <span className="text-lg text-cyan-400 group-hover:text-emerald-400 transition-colors duration-200">{icon}</span>
      <span className="font-medium">{children}</span>
    </span>
    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-300"></span>
  </Link>
);

// Componente NavLink para mobile
const MobileNavLink = ({ to, icon, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center space-x-3 px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 border border-transparent hover:border-slate-700"
  >
    <span className="text-xl text-cyan-400">{icon}</span>
    <span className="font-medium">{children}</span>
  </Link>
);

export default Header;