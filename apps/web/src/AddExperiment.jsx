import { useState } from "react";
import toast from "react-hot-toast";

export const AddExperiment = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    if (typeof props.onFormSubmit !== "function") return;

    try {
      await props.onFormSubmit({ name, description });
      toast.success("A new experiment was created!");

      // clear the form
      setName("");
      setDescription("");
    } catch {
      toast.error("Can't create a new experiment.");
    }
  }

  return (
    <form onSubmit={(e) => onFormSubmit(e)}>
      <fieldset>
        <legend>Create a new experiment: {name}</legend>

        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              required
              maxLength="255"
              placeholder="e.g., Morning Routine Test"
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Description
            <textarea
              name="description"
              rows="5"
              placeholder="tell me more..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
        </div>

        <button type="submit">Create</button>
      </fieldset>
    </form>
  );
};
