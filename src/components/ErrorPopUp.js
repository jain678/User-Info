import React from "react";
import "../styles/DisplayUserData.css";
import "../styles/ErrorPopUp.css"
import "../styles/UserInputForm.css"


function ErrorPopUp(props) {
  return (
    <div className="container card">
    {/* <div className="backdrop"/> */}
      <header className="header">
        <h2 className="header">{props.title}</h2>
      </header>
      <p className="content">{props.message}</p>

      <footer className="actions">
        <button onClick={props.onConfirm}>Okay</button>
      </footer>
    </div>
  );
}

export default ErrorPopUp;
