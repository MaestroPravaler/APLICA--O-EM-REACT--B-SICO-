import React, { Component } from "react";

export default class Events extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: 0
        }
        // precisa de declarar desta forma por causa do contexto
       // this.clickMethod = this.clickMethod.bind(this)
    }

    // Utilize arrow function porque ela não grava contexto
    clickMethod = () => {
        console.log(' -- CLICK METHOD BEGIN -- ', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        });
         console.log(' -- CLICK METHOD FINISH -- ', this.state.clicked);
    }

    render() {
        return(
            <div>
                <button onClick={this.clickMethod} type="button">Click Me</button>
            </div>
        )
    }
}