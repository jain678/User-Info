import React from "react";
import "../styles/DisplayUserData.css";

function DisplayUserData(props) {
  return (
    <div className="card container2">
      {props.userData.map((item) => (
        <div className="user-info">
          <h4>
            {item.username} is {item.age} years old.
          </h4>
        </div>
      ))}
    </div>
  );
}

export default DisplayUserData;
