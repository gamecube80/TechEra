import React from "react";
import './App.css';

function Quiz(){

    const marks =(a) =>{
        alert(a);
    }
  return (
    <div className="App">
      <button onClick={()=>marks("No!")}>CalculateMarks</button>
    </div>
  );
}

export default Quiz;