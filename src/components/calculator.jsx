import React, { useState } from "react";
import './calculator.css';

function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setExpression(expression + value);
    };

    const solveResult = () => {
        try{
            const resultSolved = eval(expression);
            setResult(resultSolved);
        } catch (error){
            setResult('Error');
        }
    };

    const clearAll = () => {
        setExpression('');
        setResult('');
    };

    return(
        <div className="Calculator">
            <h2>Simple Calculator</h2>
            <input className="display" type="text" value={expression} readOnly style={{marginBottom:'10px'}}/>
            <div className="btn-1">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>
            <div>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('-')}>-</button>
            </div>
            <div>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('*')}>*</button>
            </div>
            <div>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('.')}>.</button>
            <button onClick={solveResult}>=</button>
            <button onClick={() => handleClick('/')}>/</button>
            </div>
            <button className="btn-clear" onClick={clearAll} style={{marginTop:'10px'}}>Clear</button>
            <div>
                <p>Result: {result}</p>
            </div>
        </div>
    );
}

export default Calculator;