import React, { useState } from "react";
import { simularColas } from "../services/api";
import ChartCard from "../components/ChartCard";

const Colas = () => {
  const [lambda, setLambda] = useState("");
  const [mu, setMu] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [nSim, setNSim] = useState(1);
  const [seed, setSeed] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimular = async () => {
  if (!lambda || !mu || !tiempo)
    return alert("Ingrese Lambda, Mu y Tiempo total (t)");

  setLoading(true);

  const data = await simularColas(
    parseFloat(lambda),
    parseFloat(mu),
    parseFloat(tiempo),
    parseInt(nSim),
    seed === "" ? null : parseInt(seed)
  );

  console.log("Resultado de simularColas:", data);  // <- Aquí ves qué devuelve tu API

  setResultado(data);
  setLoading(false);
};


  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
            <h1 className="text-3xl font-bold text-neutral-900">
              Simulación de Colas M/M/1
            </h1>
          </div>
          <p className="text-neutral-600 text-sm pl-6">
            Simulación estocástica de colas con un servidor
          </p>
        </div>

        {/* Card de Inputs */}
        <div className="bg-white shadow-sm rounded-2xl p-8 mb-8 border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7 mb-10">
            {/* Lambda */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Lambda (λ)
              </label>
              <input
                type="number"
                value={lambda}
                onChange={(e) => setLambda(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="3.0"
              />
              <p className="text-xs text-neutral-500 mt-1.5">Tasa de llegada</p>
            </div>

            {/* Mu */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Mu (μ)
              </label>
              <input
                type="number"
                value={mu}
                onChange={(e) => setMu(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="4.0"
              />
              <p className="text-xs text-neutral-500 mt-1.5">Tasa de servicio</p>
            </div>

            {/* Tiempo */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Tiempo total (t)
              </label>
              <input
                type="number"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="10.0"
              />
              <p className="text-xs text-neutral-500 mt-1.5">Horizonte de simulación</p>
            </div>

            {/* Número de simulaciones */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Simulaciones
              </label>
              <input
                type="number"
                value={nSim}
                min={1}
                onChange={(e) => setNSim(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="1"
              />
              <p className="text-xs text-neutral-500 mt-1.5">Número de trayectorias</p>
            </div>

            {/* Semilla */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Semilla <span className="text-neutral-400 normal-case">(opcional)</span>
              </label>
              <input
                type="number"
                value={seed}
                onChange={(e) => setSeed(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="123"
              />
              <p className="text-xs text-neutral-500 mt-1.5">Reproducibilidad de resultados</p>
            </div>
          </div>

          {/* Botón */}
          <div className="flex justify-end">
            <button
              onClick={handleSimular}
              disabled={loading}
              className="group relative px-8 py-3.5 bg-neutral-900 text-white rounded-lg font-medium hover:bg-emerald-600 active:scale-98 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-neutral-900 flex items-center gap-3 shadow-sm"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Procesando</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span>Ejecutar simulación</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Resultados */}
        {resultado && (
          <ChartCard
  title="Resultados de la Cola M/M/1"
  labels={resultado.simulaciones[0].num_en_cola.map((_, i) => `t=${i}`)}
  datasets={[
    {
      title: "Número de clientes en cola",
      lines: resultado.simulaciones.map((sim, idx) => ({
        label: `Simulación ${idx + 1}`,
        data: sim.num_en_cola,
        color: "rgb(59,130,246)",
        backgroundColor: "rgba(59,130,246,0.1)"
      })),
    },
    {
      title: "Tiempo de espera de clientes",
      lines: resultado.simulaciones.map((sim, idx) => ({
        label: `Simulación ${idx + 1}`,
        data: sim.espera_clientes,
        color: "rgb(16,185,129)",
        backgroundColor: "rgba(16,185,129,0.1)"
      })),
    },
  ]}
  statsEmpiricas={[
    { label: "Promedio clientes en cola", value: resultado.estadisticas.promedio_clientes_cola.toFixed(2) },
    { label: "Tiempo promedio en cola", value: resultado.estadisticas.promedio_espera.toFixed(2) },
  ]}
/>

        )}
      </div>
    </div>
  );
};

export default Colas;
