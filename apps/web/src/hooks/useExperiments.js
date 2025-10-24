import { useState, useEffect } from "react";

export const useExperiments = () => {
  const [experiments, setExperiments] = useState(null);

  async function addExperiment(data) {
    const response = await fetch("/api/experiment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(`Request failed: ${response.status}`);

    fetchExperiments(); // refresh data
    return (await response.json())?.id;
  }

  async function fetchExperiments() {
    const experimentsRes = await fetch("/api/experiments");
    const experiments = await experimentsRes.json();

    setExperiments(experiments);
  }

  useEffect(() => {
    fetchExperiments();
  }, []);

  return {
    experiments,
    addExperiment: (data) => addExperiment(data),
  };
};
