import React, {Component} from 'react';
import './numberButtons.css'

class numberButtons extends Component{

    render(){
        return(
            <button className="styleButtonNumber">{this.props.number}</button>
        )
    }
}

export default numberButtons;