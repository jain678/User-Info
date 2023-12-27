import { useState } from "react";
import "./App.css";
import AddUserData from "./components/AddUserData";
import DisplayUserData from "./components/DisplayUserData";
// import UserInputForm from "./components/UserInputForm";

const userArray = [
  {
    username: "Jayant",
    age: 22,
  },
  {
    username: "Divyansh",
    age: 22,
  },
];

function App() {
  const [array, setArray] = useState(userArray);

  const updateDataHandler = (updatedArray) => {
    setArray((prevData) => {
      return [...prevData, updatedArray];
    });
  };
  return (
    <div className="App">
      <AddUserData onUpdateData={updateDataHandler} />
      <DisplayUserData userData={array}/>
    </div>
  );
}

export default App;
