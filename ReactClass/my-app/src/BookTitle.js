import React from "react";

function BookTitle(props) {

    return (
        <label>
            Title:
            <input onChange={props.onTitleChange} value={props.title} />
        </label>
    )
}

export default BookTitle;
