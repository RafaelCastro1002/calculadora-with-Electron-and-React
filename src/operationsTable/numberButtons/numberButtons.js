import React, {Component} from 'react';
import './numberButtons.css'

class numberButtons extends Component{

    render(){
        return(
            <button id={'active' + this.props.number} onClick={this.props.getNumber} value={this.props.number}>{this.props.number}</button>
        )
    }
}

export default numberButtons;