import { useState, useEffect } from "react";

export const useExperiments = () => {
  const [experiments, setExperiments] = useState(null);

  async function fetchExperiments() {
    const experimentsRes = await fetch("/api/experiments");
    const experiments = await experimentsRes.json();

    setExperiments(experiments);
  }

  useEffect(() => {
    fetchExperiments();
  }, []);

  return experiments;
};
