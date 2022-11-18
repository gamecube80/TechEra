import React from 'react';
import './App.css';

class Child extends React.Component {

    onTrigger = (event) => {
        this.props.parentCallback(event.target.myname.value);
        event.preventDefault();
    }

    render() {
        return (
            <div ClassName="submit">
                <form onSubmit={this.onTrigger}>
                    <input type="text" name="myname" placeholder="Enter Name" /><br /><br />
                    <input type="submit" value="Submit" /><br /><br />
                </form>
            </div>
        )
    }
}
export default Child