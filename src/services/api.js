// API.js
export const simularPoisson = async (lambda, t, nSim = 1, seed = null) => {
  try {
    const body = { lambda, t, n_sim: nSim };
    if (seed !== null) body.seed = seed;

    const res = await fetch("http://localhost:5000/poisson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (error) {
    console.error("Error en API Poisson:", error);
    return null;
  }
};

export const simularColas = async (lambda, mu, t, nSim = 1, seed = null) => {
  try {
    const body = { lambda, mu, t, n_sim: nSim };
    if (seed !== null) body.seed = seed;

    const res = await fetch("http://localhost:5000/colas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (error) {
    console.error("Error en API Colas:", error);
    return null;
  }
};

export const simularMarkov = async (P, x0 = 0, t = 50, nSim = 1, seed = null) => {
  try {
    const body = { P, x0, t, n_sim: nSim };
    if (seed !== null) body.seed = seed;

    const res = await fetch("http://localhost:5000/markov", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (error) {
    console.error("Error en API Markov:", error);
    return null;
  }
};
