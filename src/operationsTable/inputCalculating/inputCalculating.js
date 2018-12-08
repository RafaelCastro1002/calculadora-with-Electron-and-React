import React, {Component} from 'react';
import './inputCalculating.css';

class inputCalculating extends Component{

    render(){
        return(
            <div>
                <input onChange={this.props.handleChange} value={this.props.value} id="inputCalculating" type="text" />
            </div>
        )
    }
}

export default inputCalculating;