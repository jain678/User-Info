import React from "react";
import UserInputForm from "./UserInputForm";

function AddUserData(props) {
  const saveFormHandler = (enteredData) => {
    props.onUpdateData(enteredData);
  };

  return (
    <div>
      <UserInputForm onSaveForm={saveFormHandler} />
    </div>
  );
}

export default AddUserData;
