import React from "react";
import './App.css';

class Buttons extends React.Component {
    render() {
        return (
            <div className="Buttons">
                <h2>Select Favorite Coding Language</h2>
                <input type="radio" id="html" name="fav_language" value="HTML"></input>
                <label for="html">HTML</label><br />
                <input type="radio" id="css" name="fav_language" value="CSS"></input>
                <label for="css">CSS</label><br />
                <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
                <label for="javascript">JavaScript</label>
            </div>
        )
    }
}

export default Buttons;