import React, { Component } from 'react'
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
export class Hideshow extends Component {

    constructor() {
        super();
        this.state = {
            name: "HideShow",
            showHideComp1: false,
            showHideComp2: false,
            showHideComp3: false,
            showHideComp4: false
        };

        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showHideComp1":
                this.setState({ showHideComp1: !this.state.showHideComp1 });
                break;
            case "showHideComp2":
                this.setState({ showHideComp2: !this.state.showHideComp2 });
                break;
            case "showHideComp3":
                this.setState({ showHideComp3: !this.state.showHideComp3 });
                break;
            case "showHideComp4":
                this.setState({ showHideComp4: !this.state.showHideComp4 });
                break;
            default:
                break;
        }
    }

    render() {
        const { showHideComp1, showHideComp2, showHideComp3, showHideComp4 } = this.state;
        return (
            <div>
                <h1>HideShow Demo</h1>
                <div className="Buttons">
                    <button onClick={() => this.hideComponent("showHideComp1")}>
                        Click to toggle Comp1
                    </button><br />
                    {showHideComp1 && <Comp1 />}
                    <button onClick={() => this.hideComponent("showHideComp2")}>
                        Click to toggle Comp2
                    </button><br />
                    {showHideComp2 && <Comp2 />}
                    <button onClick={() => this.hideComponent("showHideComp3")}>
                        Click to toggle Comp3
                    </button><br />
                    {showHideComp3 && <Comp3 />}
                    <button onClick={() => this.hideComponent("showHideComp4")}>
                        Click to toggle Comp4
                    </button><br />
                    {showHideComp4 && <Comp4 />}
                </div>
            </div>
        );
    }
}


export default Hideshow;