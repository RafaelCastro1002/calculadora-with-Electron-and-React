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
        this.handleContainer = this.handleContainer.bind(this);
    }

    componentWillMount(){
        document.addEventListener("keydown", this.handleContainer, true);
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

    handleContainer(e){
        var keyPressed = e.key;
        keyPressed = keyPressed.charCodeAt(0);
        if(keyPressed === 44 || keyPressed === 49 || keyPressed === 50 || keyPressed === 51 || keyPressed === 52 || keyPressed === 53 || keyPressed === 54 || keyPressed === 55 || keyPressed === 56 || keyPressed === 57 || keyPressed === 48){
            this.setState({value: this.state.value + (keyPressed - 48)});
        }else{
            if(keyPressed === 43 || keyPressed === 45 || keyPressed === 42 || keyPressed === 47){
                var valueInput = this.state.value;
                valueInput = valueInput.substr((valueInput.length - 1), (valueInput.length - 1));
                alert(valueInput);
                if(valueInput !== "."){
                    keyPressed = String.fromCharCode(keyPressed);
                    this.setState({value: this.state.value + " " + keyPressed + " "});
                }
            }else{ 
                var bakcspace = e.key;
                if(bakcspace === 'Backspace'){
                    var stringValueInput = this.state.value;
                    stringValueInput = stringValueInput.substr(0, (stringValueInput.length - 1));
                    this.setState({value: stringValueInput});
                }else{
                    var keyPress = e.key
                    var separationsDecimals = this.state.value.indexOf(" ");
                    alert(separationsDecimals);
                    if(keyPress === '.' && this.state.value.indexOf(" ") === -1){
                        this.setState({value: this.state.value + '.'});
                    }
                }
            }
        }
    }

    render(){
        return(
            <div id="container">
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