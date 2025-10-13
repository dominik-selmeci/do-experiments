import { createRoot } from "react-dom/client";
import { Experiment } from "./experiment";
import { StrictMode } from "react";

export const App = () => {
  return (
    <section>
      <h1>Do experiments!</h1>
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
    </section>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
