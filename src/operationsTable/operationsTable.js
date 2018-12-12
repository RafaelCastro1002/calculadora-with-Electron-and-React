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
        if(value === 'x'){
            var newValue = String.fromCharCode(value)
            this.setState({value: this.state.value + newValue});
        }else{
            this.setState({value: this.state.value + value});
        }
            
    }

    realizeCalculating(numberA, numberB, operational){
        if(operational === '+'){
            return numberA + numberB
        }
        if(operational === '-'){
            return numberA - numberB
        }
        if(operational === '*'){
            return numberA * numberB
        }
        if(operational === '/'){
            return numberA / numberB
        }
    }

    PressEnterToCalculate(e){
        if(e.key === 'Enter'){
            var valueInputTokens = this.state.value.split(' ');
            if(valueInputTokens[valueInputTokens.length - 1] !== ''){
                var operationsOrderBy = ['*', '/', '+', '-'];
                for(var operationsPosition = 0; operationsPosition < 4; operationsPosition++){
                    for(var i = 1; i < valueInputTokens.length; ){
                        if(valueInputTokens[i] === operationsOrderBy[operationsPosition]){
                            var floatValueFirst = parseFloat(valueInputTokens[i - 1]);
                            var floatValueSecond = parseFloat(valueInputTokens[i + 1]);
                            valueInputTokens[i - 1] = this.realizeCalculating(floatValueFirst, floatValueSecond, operationsOrderBy[operationsPosition]);                 
                            valueInputTokens[i] = undefined;
                            valueInputTokens[i + 1] = undefined;
                            for(var position = i + 2; position < valueInputTokens.length; position++){
                                valueInputTokens[position - 2] = valueInputTokens[position];
                                valueInputTokens[position] = undefined;
                            }
                        }else{
                            i += 2;
                        }
                    }
                }
                return "" + valueInputTokens[0];
            }
        }
        return null;
    }

    setValueButton(e){
        var number = e.target.value;
        this.completeOnInput(number);
    }

    setActiveButton(activeButton){
        document.querySelector(activeButton).className = 'active';
        setTimeout(function(){ 
            document.querySelector('button.active').className = '';
        }, 180);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    getKeyNumber(keyPressed){
        if(keyPressed === 44 || keyPressed === 49 || keyPressed === 50 || keyPressed === 51 || keyPressed === 52 || keyPressed === 53 || keyPressed === 54 || keyPressed === 55 || keyPressed === 56 || keyPressed === 57 || keyPressed === 48){
            return(this.state.value + (keyPressed - 48));
        }
        return null;
    }

    getMathOperations(keyPressed){
        if(keyPressed === 43 || keyPressed === 45 || keyPressed === 42 || keyPressed === 47){
            var valueInput = this.state.value;
            valueInput = valueInput.substr((valueInput.length - 1), (valueInput.length - 1));
            if(valueInput !== "." && valueInput !== " "){
                keyPressed = String.fromCharCode(keyPressed);
                return(this.state.value + " " + keyPressed + " ");
            }
        }
        return null;
    }

    getBackspaceKey(e){
        var bakcspace = e.key;
        if(bakcspace === 'Backspace'){
            var stringValueInput = this.state.value;
            if(stringValueInput.length !== 1){
                if(stringValueInput.substr((stringValueInput.length - 1), (stringValueInput.length - 1)) === ' '){
                    stringValueInput = stringValueInput.substr(0, (stringValueInput.length - 3));
                }else{
                    stringValueInput = stringValueInput.substr(0, (stringValueInput.length - 1));
                }
            }else{
                if(stringValueInput.length === 1){
                    stringValueInput = '';
                }
            }
            return(stringValueInput);
        }
        return undefined;
    }

    getSeparationsDecimals(e){
        var keyPress = e.key
        var separationsDecimals = this.state.value.indexOf(" ");
        if(keyPress === '.' && this.state.value.indexOf(" ") === -1){
            return(this.state.value + '.');
        }
        return null;
    }

    handleContainer(e){
        var keyPressed = e.key;
        var idFirst = `#active${keyPressed}`;
        try{
            if(document.querySelector(idFirst)){
                this.setActiveButton(idFirst);
            }
        }catch(e){
            var idSecond = `[id="active${keyPressed}"]`;
            try{
                if(document.querySelector(idSecond)){
                    this.setActiveButton(idSecond);
                }
            }catch(error){
                alert('erro: ' + error)
            }
        }
        keyPressed = keyPressed.charCodeAt(0);
        if(e.key !== ","){
            if(this.getKeyNumber(keyPressed)){
                this.setState({value: this.getKeyNumber(keyPressed)});
            }
            if(this.getMathOperations(keyPressed)){
                this.setState({value: this.getMathOperations(keyPressed)});
            }    
            if(this.getBackspaceKey(e) !== undefined){
                this.setState({value: this.getBackspaceKey(e)});
            }
            if(this.getSeparationsDecimals(e)){
                this.setState({value: this.getSeparationsDecimals(e)});
            }
            if(this.PressEnterToCalculate(e)){
                this.setState({value: this.PressEnterToCalculate(e)});
            }
        }
    }

    render(){
        return(
            <div id="container">
                <InputCalculating handleChange={this.handleChange} value={this.state.value} />
                
                <div>
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="7" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="8" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="9" />
                    </span>
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="/" />
                    </span>                     
                        <br />
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="4" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="5" />
                    </span>  
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="6" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="x" />
                    </span> 
                        <br />
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="1" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="2" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="3" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="-" />
                    </span> 
                        <br />
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="." />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="0" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="+" />
                    </span> 
                    <span>
                        <NumberButton getNumber={this.setValueButton} number="=" />
                    </span> 
                </div>
            </div>
        )
    }
}

export default operationsTable;