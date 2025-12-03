import React, { useState } from "react";
import { simularMarkov } from "../services/api";
import ChartCard from "../components/ChartCard";

const Markov = () => {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState([
    [0.7, 0.3],
    [0.4, 0.6]
  ]);
  const [x0, setX0] = useState(0);
  const [tiempo, setTiempo] = useState(50);
  const [nSim, setNSim] = useState(1);
  const [seed, setSeed] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMatrixSizeChange = (newSize) => {
    const size = Math.max(2, Math.min(6, newSize));
    setMatrixSize(size);
    
    const newMatrix = Array(size).fill(0).map((_, i) => 
      Array(size).fill(0).map((_, j) => {
        if (i < matrix.length && j < matrix[0].length) {
          return matrix[i][j];
        }
        return j === 0 ? 1 : 0;
      })
    );
    setMatrix(newMatrix);
  };

  const handleCellChange = (i, j, value) => {
    const newMatrix = matrix.map(row => [...row]);
    const numValue = parseFloat(value);
    newMatrix[i][j] = isNaN(numValue) ? 0 : Math.max(0, Math.min(1, numValue));
    setMatrix(newMatrix);
  };

  const normalizeRow = (rowIndex) => {
    const sum = matrix[rowIndex].reduce((acc, val) => acc + val, 0);
    if (sum === 0) return;
    
    const newMatrix = matrix.map(row => [...row]);
    newMatrix[rowIndex] = newMatrix[rowIndex].map(val => val / sum);
    setMatrix(newMatrix);
  };

  const normalizeAll = () => {
    const newMatrix = matrix.map(row => {
      const sum = row.reduce((acc, val) => acc + val, 0);
      return sum === 0 ? row : row.map(val => val / sum);
    });
    setMatrix(newMatrix);
  };

  const handleSimular = async () => {
    if (tiempo <= 0) return alert("Ingrese el tiempo total");
    
    const isValid = matrix.every(row => {
      const sum = row.reduce((acc, val) => acc + val, 0);
      return Math.abs(sum - 1) < 0.001;
    });
    
    if (!isValid) {
      return alert("Cada fila de la matriz debe sumar 1. Use el botón 'Normalizar' para ajustar.");
    }

    setLoading(true);

    const data = await simularMarkov(
      matrix,
      parseInt(x0),
      parseInt(tiempo),
      parseInt(nSim),
      seed === "" ? null : parseInt(seed)
    );

    console.log("Resultado de simularMarkov:", data);

    setResultado(data);
    setLoading(false);
  };

  const getRowSum = (rowIndex) => {
    return matrix[rowIndex].reduce((acc, val) => acc + val, 0);
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
            <h1 className="text-3xl font-bold text-neutral-900">
              Simulación de Proceso de Markov
            </h1>
          </div>
          <p className="text-neutral-600 text-sm pl-6">
            Simulación educativa de cadenas de Markov discretas
          </p>
        </div>

        {/* Card de Inputs */}
        <div className="bg-white shadow-sm rounded-2xl p-8 mb-8 border border-neutral-200">
          
          {/* Matriz de Transición */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
                  Matriz de transición P
                </label>
                <p className="text-xs text-neutral-500">
                  Cada fila debe sumar 1 (probabilidades de transición)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-neutral-600">
                  Tamaño:
                </label>
                <select
                  value={matrixSize}
                  onChange={(e) => handleMatrixSizeChange(parseInt(e.target.value))}
                  className="px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white text-sm"
                >
                  {[2, 3, 4, 5, 6].map(size => (
                    <option key={size} value={size}>{size}×{size}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid de la Matriz */}
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full">
                  <div className="grid gap-2 mb-4" style={{ gridTemplateColumns: `auto repeat(${matrixSize}, 1fr)` }}>
                    {/* Headers */}
                    <div></div>
                    {Array.from({ length: matrixSize }, (_, j) => (
                      <div key={`header-${j}`} className="text-center text-xs font-semibold text-neutral-600 pb-2">
                        Estado {j}
                      </div>
                    ))}

                    {/* Filas */}
                    {matrix.map((row, i) => (
                      <React.Fragment key={`row-${i}`}>
                        <div className="flex items-center justify-end pr-3 text-xs font-semibold text-neutral-600">
                          Estado {i}
                        </div>
                        {row.map((cell, j) => (
                          <input
                            key={`cell-${i}-${j}`}
                            type="number"
                            step="0.01"
                            min="0"
                            max="1"
                            value={cell}
                            onChange={(e) => handleCellChange(i, j, e.target.value)}
                            className="w-20 px-3 py-2.5 text-center border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white text-sm"
                          />
                        ))}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Sumas de filas */}
                  <div className="border-t border-neutral-200 pt-4 space-y-2">
                    {matrix.map((row, i) => {
                      const sum = getRowSum(i);
                      const isValid = Math.abs(sum - 1) < 0.001;
                      return (
                        <div key={`sum-${i}`} className="flex items-center gap-3 text-sm">
                          <span className="text-neutral-600 w-16">Fila {i}:</span>
                          <span className={`font-mono font-semibold w-24 ${isValid ? 'text-green-600' : 'text-red-600'}`}>
                            Σ = {sum.toFixed(3)}
                          </span>
                          {!isValid && (
                            <button
                              onClick={() => normalizeRow(i)}
                              className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md hover:bg-indigo-100 transition-colors font-medium"
                            >
                              Normalizar
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <button
                    onClick={normalizeAll}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Normalizar Todas las Filas
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Parámetros de Simulación */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7 mb-10">
            {/* Estado inicial x0 */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Estado inicial (x0)
              </label>
              <select
                value={x0}
                onChange={(e) => setX0(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-neutral-900"
              >
                {Array.from({ length: matrixSize }, (_, i) => (
                  <option key={i} value={i}>Estado {i}</option>
                ))}
              </select>
            </div>

            {/* Tiempo total */}
            <div>
              <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2.5">
                Tiempo total (t)
              </label>
              <input
                type="number"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="50"
              />
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
                className="w-full px-4 py-3.5 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-neutral-900 placeholder-neutral-400"
                placeholder="1"
              />
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
            </div>
          </div>

          {/* Botón */}
          <div className="flex justify-end">
            <button
              onClick={handleSimular}
              disabled={loading}
              className="group relative px-8 py-3.5 bg-neutral-900 text-white rounded-lg font-medium hover:bg-indigo-600 active:scale-98 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-neutral-900 flex items-center gap-3 shadow-sm"
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
            title="Simulación de Markov"
            labels={resultado.simulaciones[0]?.estados.map((_, i) => `t=${i}`) || []}
            datasets={[
              {
                title: "Estados del sistema",
                lines: resultado.simulaciones.map((sim, idx) => ({
                  label: `Simulación ${idx + 1}`,
                  data: sim.estados,
                  color: "rgb(99,102,241)",
                  backgroundColor: "rgba(99,102,241,0.1)"
                })),
              },
            ]}
            statsEmpiricas={[
              { 
                label: "Estado final promedio", 
                value: resultado?.estadisticas?.promedio_final?.toFixed(2) ?? "-" 
              },
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Markov;