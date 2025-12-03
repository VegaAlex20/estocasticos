// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-700/50 mt-auto">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl bottom-0 left-1/4"></div>
        <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl bottom-0 right-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contenido principal */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo y descripción */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">∫</span>
              </div>
              <span className="text-white font-bold text-lg">Simulador Estocástico</span>
            </div>
            <p className="text-slate-400 text-sm text-center md:text-left">
              Explorando procesos aleatorios
            </p>
          </div>

          {/* Links de navegación */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Inicio
            </Link>
            <Link to="/poisson" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Poisson
            </Link>
            <Link to="/markov" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Markov
            </Link>
            <Link to="/colas" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium">
              Colas
            </Link>
          </div>

          {/* Info adicional */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-slate-800/50 rounded-full border border-slate-700/50">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-xs font-mono">ONLINE</span>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-700/50"></div>

        {/* Copyright */}
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-400 text-xs">
          <p>
            © {new Date().getFullYear()} Simulador Estocástico. Proyecto académico - Procesos Estocásticos
          </p>
          <p className="flex items-center space-x-1">
            <span>Hecho con</span>
            <span className="text-cyan-400">∫</span>
            <span>y</span>
            <span className="text-emerald-400">⟳</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;