import { useEffect, useState } from "react";
import { Experiment } from "./Experiment";

export function Experiments() {
  const [isLoading, setIsLoading] = useState(true);
  const [experiments, setExperiments] = useState([]);

  async function fetchExperiments() {
    const experimentsRes = await fetch("/api/experiments");
    const experiments = await experimentsRes.json();

    setExperiments(experiments);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchExperiments();
  }, []);

  return isLoading ? (
    <article aria-busy="true"></article>
  ) : (
    <>
      {experiments.map((experiment) => (
        <Experiment
          key={experiment.id}
          name={experiment.name}
          description={experiment.description}
        />
      ))}
    </>
  );
}
