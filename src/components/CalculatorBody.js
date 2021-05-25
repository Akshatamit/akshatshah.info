import React, {Component} from 'react';

class CalculatorBody extends Component {

    render() {
        return (
        
            <div>
                <div class="calc-button-row">
                   <button name="(" onClick={e => this.props.onClick(e.target.name)}class="button10">(</button>
                    <button name=")" onClick={e => this.props.onClick(e.target.name)}class="button10">)</button>
                    <button name="C" onClick={e => this.props.onClick(e.target.name)}class="button10">C</button>
                    <button name="CE" onClick={e => this.props.onClick(e.target.name)}class="button10">CE</button>
                </div>

                <div class="calc-button-row">
                <button name="7" onClick={e => this.props.onClick(e.target.name)} class="button" color="blue">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)} class="button">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)} class="button">9</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}class="button10">÷</button>                    <br/>
                </div>

                <div class="calc-button-row">
                <button name="4" onClick={e => this.props.onClick(e.target.name)}class="button">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}class="button">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}class="button">6</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}class="button10">x</button><br/>
                </div>

                <div class="calc-button-row">
                <button name="1" onClick={e => this.props.onClick(e.target.name)}class="button">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}class="button">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}class="button">3</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}class="button10">-</button><br/>
                </div>

                <div class="calc-button-row">
                <button name="0" onClick={e => this.props.onClick(e.target.name)}class="button">0</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)}class="button10">.</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}class="button10">+</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}class="button10">= </button><br/>
                </div>
            </div>
        );
    }
}


export default CalculatorBody;