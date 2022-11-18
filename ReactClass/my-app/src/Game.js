import React from "react";

function Game(props) {
    return (
        <li>
            <h1>{props.title}</h1>
            <div>{props.creator}</div>
        </li>
    )
}

export default Game;
