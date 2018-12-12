import React, {Component} from 'react';
import './inputCalculating.css';

class inputCalculating extends Component{

    render(){
        return(
            <div>
                <input disabled onChange={this.props.handleChange} value={this.props.value} id="inputCalculating" type="text" />
            </div>
        )
    }
}

export default inputCalculating;