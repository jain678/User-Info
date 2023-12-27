import React from "react";
import "../styles/DisplayUserData.css";

function DisplayUserData(props) {
  return (
    <ul className="users card">
      {props.userData.map((item) => (
        <div >
          <li>
            {item.username} is {item.age} years old.
          </li>
        </div>
      ))}
    </ul>
  );
}

export default DisplayUserData;
