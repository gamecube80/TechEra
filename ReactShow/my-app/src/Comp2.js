import React, { Component } from "react";  
   
class Comp2 extends Component {  
  constructor() {  
    super();  
    this.state = {  
      name: "Comp2" 
    };  
  }  
   
  render() {  
    return <div>This is component 2</div>;  
  }  
}  
   
export default Comp2;