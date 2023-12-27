import React, { useState } from "react";
import "../styles/UserInputForm.css";
import ErrorPopUp from "./ErrorPopUp";

function UserInputForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (name.length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a non-empty name and age!",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a non-negative age (>0)",
      });
      return;
    }
    const newData = {
      username: name,
      age: age,
    };
    props.onSaveForm(newData);
    setAge('');
    setName('');
  };

  return (
    <>
      {error && <ErrorPopUp title={error.title} message={error.message} onConfirm = {errorHandler}/>}
      <form onSubmit={submitHandler}>
        <div className="container">
          <span>
            <b>
              <label aria-placeholder="Your Name">Userame</label>
            </b>
          </span>
          <input type="text" value={name} onChange={nameChangeHandler} />
          <span>
            <b>
              <label> Age (in years)</label>
            </b>
          </span>
          <input type="number" value={age} onChange={ageChangeHandler} />

          <button className="btn">
            <span className="btn-text">Add User</span>
          </button>
        </div>
      </form>
    </>
  );
}

export default UserInputForm;
