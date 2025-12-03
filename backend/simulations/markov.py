import numpy as np

def run_markov_discreto(P, x0=0, t=50, n_sim=1, seed=None):
    if seed is not None:
        np.random.seed(seed)

    N = len(P)
    resultados = []

    for _ in range(n_sim):
        estados = [x0]

        for _ in range(t):
            estado_actual = estados[-1]
            siguiente_estado = np.random.choice(N, p=P[estado_actual])
            estados.append(siguiente_estado)

        resultados.append({
            "estados": estados,
            "frecuencia_estados": [estados.count(i)/len(estados) for i in range(N)]
        })

    frecuencias_promedio = np.mean(
        [r["frecuencia_estados"] for r in resultados], axis=0
    )

    estadisticas = {
        "frecuencias_promedio": frecuencias_promedio.tolist()
    }

    return {"simulaciones": resultados, "estadisticas": estadisticas, "tiempos": list(range(t+1))}
