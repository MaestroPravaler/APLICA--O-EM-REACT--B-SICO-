import React, { Component } from "react";

import Panel from './Panel'

export default class Props extends Component {
    constructor(props){
        super(props);
        const { attr, attr2, attr3 } = this.props;
        console.log(attr, attr2, attr3);

    }
    render() {
        const {
            attr,
            attr2,
            attr3
        } = this.props;
        return ( 
            <div>
                { attr === 'p' ? <p>PROPS</p> : <h1>PROPS MAIOR</h1>}
                <Panel headercolor="red" headertext="This is a Header" data="Testando o Props" />
            </div>
        )
    }
}