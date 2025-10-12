import React from "react";
import { createRoot } from "react-dom/client";
import { Experiment } from "./experiment";

export const App = () => {
  return React.createElement("section", {}, [
    React.createElement("h1", {}, "Do experiments!"),
    React.createElement(Experiment, {
      name: "Exercice once a day",
      date: "Date: 9.10.2025 - 14.10.2025",
      routine: "Routine: Everytime after breakfast around 10:00",
    }),
    React.createElement(Experiment, {
      name: "Don't use phone till lunch",
      date: "Date: 15.10.2025 - 21.10.2025",
      routine: "Routine: Hide your phone till lunch.",
    }),
  ]);
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(React.createElement(App));
