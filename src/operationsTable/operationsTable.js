import React, {Component} from 'react';
import InputCalculating from './inputCalculating/inputCalculating';
import ButtonSum from './buttonOperationSum/buttonSum';
import NumberButton from './numberButtons/numberButtons';
import './operationsTable.css';

class operationsTable extends Component{

    render(){
        return(
            <div id="container">
                <InputCalculating />
                <ButtonSum />
                
                <NumberButton number="7" />
                <NumberButton number="8" />
                <NumberButton number="9" />
                <br />
                <NumberButton number="4" />
                <NumberButton number="5" />
                <NumberButton number="6" />
                <br />
                <NumberButton number="1" />
                <NumberButton number="2" />
                <NumberButton number="3" />
                <br />
                <NumberButton number="0" />
                
            </div>
        )
    }
}

export default operationsTable;