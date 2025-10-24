import { Experiment } from "./Experiment";

export function Experiments(props) {
  return props?.experiments ? (
    <>
      {props.experiments.map((experiment) => (
        <Experiment
          key={experiment.id}
          name={experiment.name}
          description={experiment.description}
        />
      ))}
    </>
  ) : (
    <article aria-busy="true"></article>
  );
}
