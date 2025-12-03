// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl bottom-20 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-mono tracking-wider">PROYECTO EDUCATIVO</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight">
              Simulador Interactivo de
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
                Procesos Estocásticos
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Herramienta educativa diseñada para visualizar y comprender los procesos aleatorios más importantes en probabilidad y estadística
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link 
                to="/poisson"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>Comenzar simulación</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <a 
                href="#objetivo"
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                Conocer más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo Section */}
      <section id="objetivo" className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Objetivo del <span className="italic text-cyan-400">Proyecto</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-center font-light">
              Crear un <span className="text-cyan-400 font-semibold italic">software educativo interactivo</span> que permita a estudiantes y profesionales visualizar, experimentar y comprender los conceptos fundamentales de tres procesos estocásticos esenciales: <span className="text-emerald-400 font-medium">Procesos de Poisson</span>, <span className="text-emerald-400 font-medium">Cadenas de Markov</span> y <span className="text-emerald-400 font-medium">Teoría de Colas</span>, facilitando el aprendizaje mediante simulaciones numéricas en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Módulos de <span className="italic text-emerald-400">Simulación</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Poisson Card */}
            <Link to="/poisson" className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  Proceso de <span className="italic">Poisson</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 font-light">
                  Modela eventos que ocurren aleatoriamente en el tiempo, como llegadas de clientes, llamadas telefónicas o desintegraciones radiactivas.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explorar módulo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Markov Card */}
            <Link to="/markov" className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                  Cadenas de <span className="italic">Markov</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 font-light">
                  Sistemas donde la probabilidad de cambiar de estado depende únicamente del estado actual, útil para predicción y análisis de sistemas.
                </p>
                <div className="flex items-center text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explorar módulo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Colas Card */}
            <Link to="/colas" className="group">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  Teoría de <span className="italic">Colas</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4 font-light">
                  Análisis de sistemas de espera, optimización de recursos y estudio de tiempos de servicio en diversos contextos.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explorar módulo</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Metodología y Tecnologías */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Metodología */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-400 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">
                  <span className="italic">Metodología</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-white font-serif font-semibold text-lg mb-2">Diseño de Software</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Arquitectura modular y escalable para cada proceso estocástico</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-white font-serif font-semibold text-lg mb-2">Simulación Numérica</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Implementación de algoritmos de Monte Carlo y métodos estocásticos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-white font-serif font-semibold text-lg mb-2">Visualización Interactiva</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Gráficos dinámicos en tiempo real para mejor comprensión</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tecnologías */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-400 rounded-lg flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white">
                  <span className="italic">Tecnologías</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/50 transition-all group">
                  <div className="text-cyan-400 font-serif font-bold text-xl mb-2 group-hover:scale-105 transition-transform">Python + Flask</div>
                  <p className="text-slate-400 text-sm font-light">Backend y cálculos numéricos</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-emerald-500/50 transition-all group">
                  <div className="text-emerald-400 font-serif font-bold text-xl mb-2 group-hover:scale-105 transition-transform">React</div>
                  <p className="text-slate-400 text-sm font-light">Interfaz de usuario dinámica</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-cyan-500/50 transition-all group">
                  <div className="text-cyan-400 font-serif font-bold text-xl mb-2 group-hover:scale-105 transition-transform">Matplotlib</div>
                  <p className="text-slate-400 text-sm font-light">Visualizaciones científicas</p>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5 hover:border-emerald-500/50 transition-all group">
                  <div className="text-emerald-400 font-serif font-bold text-xl mb-2 group-hover:scale-105 transition-transform">NumPy</div>
                  <p className="text-slate-400 text-sm font-light">Computación numérica</p>
                </div>
              </div>

              <div className="mt-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-5">
                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  <span className="text-cyan-400 font-serif font-semibold">Tipo:</span> <span className="italic">Simulación educativa interactiva</span> con enfoque en el aprendizaje visual y experimental
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Listo para explorar los <span className="italic text-cyan-400">procesos estocásticos</span>?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
            Comienza tu viaje en el mundo de la probabilidad y los eventos aleatorios
          </p>
          <Link 
            to="/poisson"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <span>Iniciar simulación</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;