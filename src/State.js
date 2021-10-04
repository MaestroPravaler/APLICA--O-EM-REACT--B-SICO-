import React, { Component } from "react";

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'RobsonMaestro',
            identidade: '123456',
        };
        console.log(this.state);
    }

    render() {
        const { name, identidade} = this.state;
        return(
            <div>
                <p>Nome: { name }</p>
                <p>Identidade: { identidade }</p>

            </div>
            
        );
    }

}