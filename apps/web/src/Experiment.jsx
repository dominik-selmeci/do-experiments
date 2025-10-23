export const Experiment = (props) => {
  return (
    <div className="Experiment">
      <h2>{props.name}</h2>
      <p>
        <strong>{props.description}</strong>
      </p>
      <hr />
    </div>
  );
};
