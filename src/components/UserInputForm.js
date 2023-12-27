import React, { useState } from "react";
import "../styles/UserInputForm.css";

function UserInputForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }
  const ageChangeHandler = (event) =>{
    setAge(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newData = {
      username: name,
      age : age
    }
    props.onSaveForm(newData);
    setAge();
    setName('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <span><b><label aria-placeholder="Your Name" >Userame</label></b></span>
        <input type="text" value={name} onChange={nameChangeHandler} />
        <span><b><label> Age (in years)</label></b></span>
        <input type="number" value={age} onChange={ageChangeHandler}/>

        <button className="btn"><span className="btn-text">Add User</span></button>
      </div>
    </form>
  );
}

export default UserInputForm;
