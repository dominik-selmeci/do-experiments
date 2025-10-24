import { Experiment } from "./Experiment";
import { useExperiments } from "./hooks/useExperiments";

export function Experiments() {
  const experiments = useExperiments();

  return !experiments ? (
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
