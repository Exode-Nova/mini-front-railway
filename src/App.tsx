import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="hero">
        <h1>🚀 Mini Front Railway</h1>
        <p className="subtitle">
          Déployé via Hermes Agent sur Railway
        </p>
      </header>

      <main className="main">
        <div className="card">
          <p className="counter-label">Compteur interactif</p>
          <button
            className="counter-btn"
            onClick={() => setCount((c) => c + 1)}
          >
            {count}
          </button>
          <div className="actions">
            <button
              className="reset-btn"
              onClick={() => setCount(0)}
              disabled={count === 0}
            >
              ↺ Réinitialiser
            </button>
          </div>
        </div>

        <p className="hint">
          Modifie <code>src/App.tsx</code> et sauvegarde pour voir les
          changements.
        </p>
      </main>

      <footer className="footer">
        <p>Exode-Nova · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
