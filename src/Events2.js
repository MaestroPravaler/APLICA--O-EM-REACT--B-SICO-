import React, { Component } from "react";

export default class Events2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            data: []
        }
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
        console.log('STATE', this.state);
    }

    insertToData = () => {
        const arr = this.state.data;
        arr.push(this.state.name);
        this.setState({
            name: '',
            data: arr
        });
        console.log(this.state);
    }

    render(){
        const { data } = this.state;
        return(
            <div>
                <input type="text" onChange={ this.handleChange } name="name" id="name" placeholder="Enter Your Name"/>
                <button type="button" onClick={ this.insertToData }>Click Me</button>
                <ul>
                    { data.map(item=> (
                        <li key={ item }>{ item }</li>
                    ))

                    }
                </ul>
            </div>
        )
    }
}