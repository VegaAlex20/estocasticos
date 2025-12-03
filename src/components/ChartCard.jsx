import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { BarChart3, TrendingUp, Activity } from "lucide-react";

const ChartCard = ({
  title,
  datasets = [],
  labels = [],
  statsEmpiricas = [],
  statsTeoricas = []
}) => {
  if (!datasets.length || !labels.length) return null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: true,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: { size: 13, weight: '600' },
          color: '#1e293b',
          boxWidth: 8,
          boxHeight: 8
        }
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#1e293b',
        bodyColor: '#475569',
        padding: 16,
        borderColor: '#e2e8f0',
        borderWidth: 2,
        titleFont: { size: 14, weight: '700' },
        bodyFont: { size: 13, weight: '500' },
        cornerRadius: 12,
        displayColors: true,
        boxPadding: 8,
      },
    },
    scales: {
      x: { 
        grid: { 
          color: '#f1f5f9', 
          drawBorder: false,
          lineWidth: 1
        }, 
        ticks: { 
          font: { size: 11, weight: '600' }, 
          color: '#64748b',
          padding: 10
        },
        border: { display: false }
      },
      y: { 
        grid: { 
          color: '#f1f5f9', 
          drawBorder: false,
          lineWidth: 1
        }, 
        ticks: { 
          font: { size: 11, weight: '600' }, 
          color: '#64748b',
          padding: 10
        },
        border: { display: false }
      },
    },
    interaction: { intersect: false, mode: 'index' },
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
      
      {/* Header limpio y elegante */}
      <div className="border-b border-slate-200 px-10 py-6 bg-slate-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-sm">
            <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        </div>
      </div>

      <div className="p-10">
        
        {/* Estadísticas minimalistas */}
        {statsEmpiricas.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Estadísticas Empíricas</h3>
              </div>
              
              <div className="space-y-3">
                {statsEmpiricas.map((s, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-orange-100 last:border-0">
                    <span className="text-slate-600 font-medium text-sm">{s.label}</span>
                    <span className="text-slate-900 font-bold text-base">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {statsTeoricas.length > 0 && (
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">Valores Teóricos</h3>
                </div>
                
                <div className="space-y-3">
                  {statsTeoricas.map((s, i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b border-emerald-100 last:border-0">
                      <span className="text-slate-600 font-medium text-sm">{s.label}</span>
                      <span className="text-slate-900 font-bold text-base">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Gráficos limpios */}
        {datasets.map((d, i) => (
          <div key={i} className="mb-8 last:mb-0 bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
              <h3 className="font-bold text-slate-900 text-lg">{d.title}</h3>
            </div>
            
            <div className="h-80 bg-white rounded-xl p-6 border border-slate-200">
              <Line
                data={{
                  labels,
                  datasets: d.lines.map(line => ({
                    label: line.label,
                    data: line.data,
                    borderColor: line.color,
                    backgroundColor: line.backgroundColor || "rgba(0,0,0,0.05)",
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2.5,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointBackgroundColor: line.color,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverBorderWidth: 3,
                  }))
                }}
                options={chartOptions}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartCard;