import React, {Component} from 'react';
import InputCalculating from './inputCalculating/inputCalculating';
import ButtonSum from './buttonOperationSum/buttonSum';
import NumberButton from './numberButtons/numberButtons';
import './operationsTable.css';

class operationsTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
        }
        this.completeOnInput = this.completeOnInput.bind(this);
        this.setValueButton = this.setValueButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    completeOnInput(value){
        console.log('parameter: ' + value);
        this.setState({value: this.state.value + value});
        console.log('state: ' + this.state.value);
    }

    setValueButton(e){
        var number = e.target.value;
        this.completeOnInput(number);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleContainer(e = Window.event){
        alert(e.key);
    }

    render(){
        return(
            <div onKeyDown={this.handleContainer} id="container">
                <InputCalculating handleChange={this.handleChange} value={this.state.value} />
                <ButtonSum />
                
                <NumberButton getNumber={this.setValueButton} number="7" />
                <NumberButton getNumber={this.setValueButton} number="8" />
                <NumberButton getNumber={this.setValueButton} number="9" />
                <br />
                <NumberButton getNumber={this.setValueButton} number="4" />
                <NumberButton getNumber={this.setValueButton} number="5" />
                <NumberButton getNumber={this.setValueButton} number="6" />
                <br />
                <NumberButton getNumber={this.setValueButton} number="1" />
                <NumberButton getNumber={this.setValueButton} number="2" />
                <NumberButton getNumber={this.setValueButton} number="3" />
                <br />
                <NumberButton getNumber={this.setValueButton} number="0" />
                
            </div>
        )
    }
}

export default operationsTable;