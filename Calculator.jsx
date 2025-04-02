import React, { useState } from 'react';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    setDisplayValue((prev) => (prev === '0' ? String(number) : prev + number));
  };

  const handleOperatorClick = (operator) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(displayValue));
    } else if (operation) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setPreviousValue(result);
    }
    setOperation(operator);
    setDisplayValue('0');
  };

  const handleEqualsClick = () => {
    if (operation) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setPreviousValue(null);
      setOperation(null);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperation(null);
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue((prev) => prev + '.');
    }
  };

  const handlePercentageClick = () => {
    setDisplayValue((prev) => String(parseFloat(prev) / 100));
  };

  const handleSignChangeClick = () => {
    setDisplayValue((prev) => String(parseFloat(prev) * -1));
  };

  const performCalculation = () => {
    const currentValue = parseFloat(displayValue);
    switch (operation) {
      case '+':
        return previousValue + currentValue;
      case '-':
        return previousValue - currentValue;
      case '*':
        return previousValue * currentValue;
      case '/':
        return previousValue / currentValue;
      default:
        return currentValue;
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
      <div style={{ backgroundColor: 'white', padding: '10px', textAlign: 'right', marginBottom: '10px', border: '1px solid #ddd', borderRadius: '3px' }}>
        {displayValue}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
        <button onClick={() => handleClearClick()} style={buttonStyle}>AC</button>
        <button onClick={() => handleSignChangeClick()} style={buttonStyle}>+/-</button>
        <button onClick={() => handlePercentageClick()} style={buttonStyle}>%</button>
        <button onClick={() => handleOperatorClick('/')} style={operatorButtonStyle}>/</button>

        <button onClick={() => handleNumberClick(7)} style={buttonStyle}>7</button>
        <button onClick={() => handleNumberClick(8)} style={buttonStyle}>8</button>
        <button onClick={() => handleNumberClick(9)} style={buttonStyle}>9</button>
        <button onClick={() => handleOperatorClick('')} style={operatorButtonStyle}></button>

        <button onClick={() => handleNumberClick(4)} style={buttonStyle}>4</button>
        <button onClick={() => handleNumberClick(5)} style={buttonStyle}>5</button>
        <button onClick={() => handleNumberClick(6)} style={buttonStyle}>6</button>
        <button onClick={() => handleOperatorClick('-')} style={operatorButtonStyle}>-</button>

        <button onClick={() => handleNumberClick(1)} style={buttonStyle}>1</button>
        <button onClick={() => handleNumberClick(2)} style={buttonStyle}>2</button>
        <button onClick={() => handleNumberClick(3)} style={buttonStyle}>3</button>
        <button onClick={() => handleOperatorClick('+')} style={operatorButtonStyle}>+</button>

        <button onClick={() => handleNumberClick(0)} style={{ ...buttonStyle, gridColumn: '1 / 3' }}>0</button>
        <button onClick={() => handleDecimalClick()} style={buttonStyle}>.</button>
        <button onClick={() => handleEqualsClick()} style={operatorButtonStyle}>=</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '15px',
  fontSize: '18px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  backgroundColor: 'white',
  cursor: 'pointer',
};

const operatorButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#f0a000',
  color: 'white',
};

export default Calculator;
