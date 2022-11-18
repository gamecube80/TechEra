import React, { useState } from "react";
import BookTitle from "./BookTitle";

function BookExhibition(props) {
    const [title, setTitle] = useState(props.book.title)

    function handleTitleChange(a) {
        setTitle(a.target.value)
    }

    return (
        <form>
            <BookTitle onTitleChange={handleTitleChange} title={title} />
        </form>
    )

}

export default BookExhibition;
