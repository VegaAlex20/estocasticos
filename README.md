# 🎲 Proyecto 17 --- Simulador Interactivo de Procesos Estocásticos

Este es un **simulador educativo** enfocado en visualizar y comprender
el comportamiento de los procesos estocásticos clásicos:

-   **Procesos de Poisson**
-   **Cadenas de Markov (tiempo discreto)**
-   **Sistemas de Colas M/M/1**

El objetivo principal es ofrecer una herramienta intuitiva, visual y
didáctica para estudiantes de Probabilidad, Estadística, Investigación
Operativa y Ciencia de Datos.

------------------------------------------------------------------------

## 🚀 Características Principales

-   ✅ **Simulación en tiempo real**\
    Ejecuta procesos estocásticos con parámetros personalizables.

-   ✅ **Visualizaciones intuitivas**\
    Gráficas claras usando React + Chart.js/Plotly para comprensión
    inmediata.

-   ✅ **Interfaz educativa y amigable**\
    Pensada para el aprendizaje con ejemplos y parámetros guiados.

-   ✅ **Backend especializado**\
    Todas las simulaciones están implementadas en Python usando NumPy.

-   ✅ **Modular y extensible**\
    Estructura lista para añadir nuevos modelos estocásticos.

------------------------------------------------------------------------

## 🛠️ Tecnologías Utilizadas

### 🔙 Backend (Simuladores)

-   **Python**
-   **Flask** -- API REST
-   **NumPy** -- generación aleatoria y cálculos estadísticos

### 🔜 Frontend (Interfaz)

-   **React** -- UI modular y moderna
-   **Tailwind CSS** -- estilos rápidos y responsivos
-   **Fetch API / Axios** -- consumo de servicios REST

------------------------------------------------------------------------

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

``` bash
git clone https://github.com/VegaAlex20/estocasticos.git
cd estocasticos
```

------------------------------------------------------------------------

### 2️⃣ Configurar el Backend

``` bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

cd backend
pip install -r requirements.txt
```

------------------------------------------------------------------------

### 3️⃣ Configurar el Frontend

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

## ▶️ 4️⃣ Iniciar el Proyecto

En una terminal (backend):

``` bash
cd backend
python app.py
```

En otra terminal (frontend):

``` bash
cd frontend
npm run dev
```

El backend se ejecutará en `http://localhost:5000`\
El frontend en `http://localhost:5173`

------------------------------------------------------------------------

## 📁 Estructura del Proyecto

    estocasticos/
    ├── backend/
    │   ├── simulations/        # Simulaciones: Poisson, Markov y Colas
    │   ├── app.py              # API principal con Flask
    │   └── requirements.txt    # Dependencias del backend
    │
    ├── frontend/
    │   ├── src/                # Componentes, vistas y lógica del simulador
    │   └── package.json
    │
    ├── .env                    # Variables de entorno (opcional)
    └── README.md               # Documentación del proyecto

------------------------------------------------------------------------

## 📘 Modelos Implementados

### 🔹 **Proceso de Poisson**

-   Generación de tiempos entre llegadas\
-   Conteos por intervalo\
-   Comparación entre valores simulados y teóricos

### 🔹 **Cadenas de Markov (discretas)**

-   Evolución del estado a través del tiempo\
-   Distribuciones de estado empíricas\
-   Matriz de transición definida por el usuario

### 🔹 **Sistema de Colas M/M/1**

-   Llegadas (λ) y servicio (μ) exponenciales\
-   Tiempo en cola, tiempo en sistema\
-   Longitud de la cola en el tiempo\
-   Estadísticas de espera

------------------------------------------------------------------------

## 📬 Contacto

📧 **Email:** alefrvg@gmail.com\
🐙 **GitHub:** https://github.com/VegaAlex20

------------------------------------------------------------------------

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**.\
Hecho con 💻, ☕ y paciencia por **Alex**.
