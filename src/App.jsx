import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Poisson from "./pages/Poisson";
import Home from "./pages/Home";
import Colas from "./pages/Colas";
import Markov from "./pages/Markov";
import './App.css'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/poisson" element={<Poisson />} />
          <Route path="/colas" element={<Colas />} />
          <Route path="/markov" element={<Markov />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
