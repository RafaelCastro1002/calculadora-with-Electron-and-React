import React, {Component} from 'react';
import InputCalculating from './inputCalculating/inputCalculating';
import './operationsTable.css';

class operationsTable extends Component{

    render(){
        return(
            <div id="container">
                <InputCalculating />
            </div>
        )
    }
}

export default operationsTable;