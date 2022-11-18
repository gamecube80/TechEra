import React from "react";

class Bike extends React.Component {
    componentWillUnmount() {
        alert("I will unmount");
    }

    render() {
        return (
            <h2>Hello unmount</h2>
        )
    }
}

export default Bike;