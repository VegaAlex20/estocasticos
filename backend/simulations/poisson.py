import numpy as np

def run_poisson(lam=1, t=10, n_sim=1, seed=None):
    if seed is not None:
        np.random.seed(seed)

    resultados = []

    for _ in range(n_sim):
        interarrivals = np.random.exponential(1/lam, int(t))
        llegadas = np.cumsum(interarrivals)
        counts = np.random.poisson(lam, int(t)).tolist()

        resultados.append({
            "interarrivals": interarrivals.tolist(),
            "llegadas": llegadas.tolist(),
            "counts": counts,
            "total_eventos": int(sum(counts)),
        })

    totales = [r["total_eventos"] for r in resultados]

    estadisticas = {
        "promedio": float(np.mean(totales)),
        "varianza": float(np.var(totales)),
        "teorico_esperanza": lam * t,
        "teorico_varianza": lam * t
    }

    return resultados, estadisticas
