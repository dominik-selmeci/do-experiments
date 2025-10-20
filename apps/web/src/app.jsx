import { createRoot } from "react-dom/client";
import { Experiment } from "./Experiment";
import { StrictMode } from "react";
import { AddExperiment } from "./AddExperiment";

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
            <Experiment
              name="Exercice once a day"
              date="Date: 9.10.2025 - 14.10.2025"
              routine="Routine: Everytime after breakfast around 10:00"
            />
            <Experiment
              name="Don't use phone till lunch"
              date="Date: 15.10.2025 - 21.10.2025"
              routine="Routine: Hide your phone till lunch."
            />
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
