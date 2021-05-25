import React, { Component } from 'react';
import './App.css';
import ResultBody from './components/ResultBody';
import CalculatorBody from './components/CalculatorBody';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

      //If and else statement to assign buttons what they do
        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    //Calculates the digits
    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    //Reset the inputs
    reset = () => {
        this.setState({
            result: ""
        })
    };

    //Allows to removes the inputs
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    //Calculate the body
    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Akshat's Calculator PWA</h1>
                    <ResultBody result={this.state.result}/>
                    <CalculatorBody onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;