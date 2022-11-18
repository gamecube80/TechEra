import React from "react";
import "./App.css"

function Car(props) {
    return <div className="Car"><h2> I am working as a:</h2><p>{props.job}</p></div>
}

export default Car;