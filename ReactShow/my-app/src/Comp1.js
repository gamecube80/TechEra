import React, { Component } from "react";  
class Comp1 extends Component {  
  constructor() {  
    super();  
    this.state = {  
      name: "Comp1" 
    };  
  }  
   
  render() {  
    return <div>This is component 1</div>;  
  }  
}  
   
export default Comp1;