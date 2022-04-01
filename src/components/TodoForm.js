import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <form onSubmit={onSubmit} className="">
      <label className="">Name</label>
      <input
        type="text"
        className=""
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button type="submit" className="mb-2">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
