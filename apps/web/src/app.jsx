import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AddExperiment } from "./AddExperiment";
import { Experiments } from "./Experiments";
import { useExperiments } from "./hooks/useExperiments";

export const App = () => {
  const { experiments, addExperiment } = useExperiments();

  return (
    <main className="container">
      <section>
        <h1>Do experiments!</h1>
        <div className="grid">
          <article>
            <AddExperiment onFormSubmit={addExperiment} />
          </article>
          <article>
            <Experiments experiments={experiments} />
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
