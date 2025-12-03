import React, { useState } from "react";
import { simularPoisson } from "../services/api";
import ChartCard from "../components/ChartCard";

const Poisson = () => {
  const [lambda, setLambda] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [nSim, setNSim] = useState(1);
  const [seed, setSeed] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSimular = async () => {
    if (!lambda || !tiempo) return alert("Ingrese Lambda y Tiempo total (t)");

    setLoading(true);

    const data = await simularPoisson(
      parseFloat(lambda),
      parseFloat(tiempo),
      parseInt(nSim),
      seed === "" ? null : parseInt(seed)
    );

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
            <h1 className="text-3xl font-bold text-neutral-900">Proceso de Poisson</h1>
          </div>
          <p className="text-neutral-600 text-sm pl-6">Simulación estocástica de eventos discretos</p>
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
              <p className="text-xs text-neutral-500 mt-1.5">Tasa de llegada de eventos</p>
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

          <div className="border-t border-neutral-200 mb-8"></div>

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
            title="Resultados del Proceso de Poisson"
            labels={resultado.simulaciones[0].llegadas.map((_, i) => `Evento ${i + 1}`)}
            datasets={[
              {
                title: "Llegadas Acumuladas",
                lines: resultado.simulaciones.map((sim, idx) => ({
                  label: `Simulación ${idx + 1}`,
                  data: sim.llegadas,
                  color: "rgb(6,182,212)",
                  backgroundColor: "rgba(6,182,212,0.1)"
                })),
              },
              {
                title: "Eventos por Unidad de Tiempo",
                lines: resultado.simulaciones.map((sim, idx) => ({
                  label: `Simulación ${idx + 1}`,
                  data: sim.counts,
                  color: "rgb(16,185,129)",
                  backgroundColor: "rgba(16,185,129,0.1)"
                })),
              },
            ]}
            statsEmpiricas={[
              { label: "Total de eventos", value: resultado.simulaciones[0].total_eventos },
              { label: "Promedio", value: resultado.estadisticas.promedio.toFixed(4) },
              { label: "Varianza", value: resultado.estadisticas.varianza.toFixed(4) },
            ]}
            statsTeoricas={[
              { label: "Esperanza E[N(t)]", value: resultado.estadisticas.teorico_esperanza },
              { label: "Varianza Var[N(t)]", value: resultado.estadisticas.teorico_varianza },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Poisson;
