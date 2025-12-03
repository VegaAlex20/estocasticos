import numpy as np

def run_colas(lam=1.0, mu=1.5, t=10, n_sim=1, seed=None):
    if seed is not None:
        np.random.seed(seed)

    resultados = []

    for _ in range(n_sim):
        tiempo = 0.0
        cola = []
        llegadas = []
        salidas = []
        num_en_cola = []

        while tiempo < t:
            # Tiempo hasta próxima llegada y servicio
            ta = np.random.exponential(1/lam)
            ts = np.random.exponential(1/mu) if len(cola) > 0 else 0

            if len(cola) == 0 or ta < ts:
                # Llegada
                tiempo += ta
                if tiempo > t:
                    break
                cola.append(tiempo)
                llegadas.append(tiempo)
            else:
                tiempo += ts
                salida = cola.pop(0)
                salidas.append(tiempo)
            
            num_en_cola.append(len(cola))

        espera_clientes = np.array(salidas) - np.array(llegadas[:len(salidas)])
        resultados.append({
            "llegadas": llegadas,
            "salidas": salidas,
            "num_en_cola": num_en_cola,
            "espera_clientes": espera_clientes.tolist(),
            "promedio_espera": float(np.mean(espera_clientes)) if len(espera_clientes) > 0 else 0.0,
            "varianza_espera": float(np.var(espera_clientes)) if len(espera_clientes) > 0 else 0.0,
        })

    promedios = [r["promedio_espera"] for r in resultados]
    varianzas = [r["varianza_espera"] for r in resultados]

    estadisticas = {
        "promedio_espera": float(np.mean(promedios)),
        "varianza_espera": float(np.mean(varianzas)),
        "promedio_clientes_cola": float(np.mean([np.mean(r["num_en_cola"]) if len(r["num_en_cola"])>0 else 0 for r in resultados]))
    }

    return resultados, estadisticas
