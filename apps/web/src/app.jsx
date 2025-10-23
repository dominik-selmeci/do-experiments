import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AddExperiment } from "./AddExperiment";
import { Experiments } from "./Experiments";

export const App = () => {
  return (
    <main className="container">
      <section>
        <h1>Do experiments!</h1>
        <div className="grid">
          <article>
            <AddExperiment />
          </article>
          <article>
            <Experiments />
          </article>
        </div>
      </section>
    </main>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
