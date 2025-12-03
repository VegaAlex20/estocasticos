from flask import Flask, request, jsonify
from flask_cors import CORS
from simulations.poisson import run_poisson
from simulations.colas import run_colas
from simulations.markov import run_markov_discreto  
app = Flask(__name__)
CORS(app)

@app.route("/poisson", methods=["POST"])
def poisson_route():
    data = request.get_json()
    lam = float(data.get("lambda", 1))
    t = float(data.get("t", 10))
    n_sim = int(data.get("n_sim", 1))
    seed = data.get("seed", None)

    resultados, estadisticas = run_poisson(lam, t, n_sim, seed)

    return jsonify({
        "simulaciones": resultados,
        "estadisticas": estadisticas
    })

@app.route("/colas", methods=["POST"])
def colas_route():
    data = request.get_json()
    lam = float(data.get("lambda", 1))
    mu = float(data.get("mu", 1.5))
    t = float(data.get("t", 10))
    n_sim = int(data.get("n_sim", 1))
    seed = data.get("seed", None)

    resultados, estadisticas = run_colas(lam, mu, t, n_sim, seed)

    return jsonify({
        "simulaciones": resultados,
        "estadisticas": estadisticas
    })

@app.route("/markov", methods=["POST"])
def markov_route():
    data = request.get_json()
    P = data.get("P")  
    x0 = int(data.get("x0", 0))
    t = int(data.get("t", 50))
    n_sim = int(data.get("n_sim", 1))
    seed = data.get("seed", None)

    import numpy as np
    P = np.array(P)

    result = run_markov_discreto(P, x0=x0, t=t, n_sim=n_sim, seed=seed)

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
