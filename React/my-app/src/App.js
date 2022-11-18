import React from 'react';
import './App.css';

function App() {
  constructor(props){
    super(props);
    this.state ={show:true}
}
delVehicle =() =>{
    this.setState({show:false});
}
render(){
    let a;
    if(this.state.show){
        a=<Car/>;
    }
    return(
        <div>
            {a}
            <button type="button" onClick={this.delVehicle}>Del</button>
        </div>
    );
}

export default App;