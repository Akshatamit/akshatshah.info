import React, {Component} from 'react';

class ResultBody extends Component {


    render() {
        let {result} = this.props;
        return (
            <div class="calc-screen">
                <div class="calc-operation">

                <p>{result}</p>
                </div>
                
                
            </div>
    )
        ;
    }
}


export default ResultBody;