export const Experiment = (props) => {
  return (
    <div className="Experiment">
      <h2>{props.name}</h2>
      <p>
        <strong>{props.date}</strong>
        <br />
        <span>{props.routine}</span>
      </p>
      <hr />
    </div>
  );
};
