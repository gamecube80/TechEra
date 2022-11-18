import React from "react";
import './App.css';

class Vehicle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            types: "Truck",
            brand: "Ferd",
            color: "Blue",
            model: "F-Teen thousand",
            show: true
        };
    }

    // shouldComponentUpdate(){
    //     return true;
    // }

    // componentDidMount(){
    //     setTimeout(() =>{
    //         this.setState({color:"Black"})
    //     },5000)
    // }

    componentDidUpdate() {
        document.getElementById("one").innerHTML = "Yes I updated color to: " + this.state.color;
    }

    getSnapshotBeforeUpdate(prevProps, preState) {
        document.getElementById("two").innerHTML = "Before updating the component prop was " + preState.color;
    }

    // componentWillUnmount() {
    //     alert("I will unmount");
    // }

    delVehicle = () => {
        this.setState({ show: false });
    }

    // static getDerivedStateFromProps(props, state){
    //     return {color: props.a, model: props.b};
    // }

    changeBrand = () => {
        this.setState({ brand: "Chev" });
    }

    changeColor = () => {
        this.setState({ color: "Red" });
    }

    render() {

        // let c;

        // if (this.state.show) {
        //     c = <Bike />;
        // }

        return (
            <div className="Vehicle">
                {/* {c} */}
                <h2>My {this.state.brand}:</h2>
                <p id="vehicle">My {this.state.model} is {this.state.color}</p>
                <div id="one"> Here will be the componentDidUpdate </div>
                <div id="two"> Here will be the getSnapshotBeforeUpdate </div>
                <button type="button" className="button1" onClick={this.changeBrand}>Change Brands</button>
                <button type="button" className="button2" onClick={this.changeColor}>Change Color</button>
                <button type="button" className="button3" onClick={this.delVehicle}>Delete Vehicle</button>
            </div>

            
        )
    }
}

export default Vehicle;
