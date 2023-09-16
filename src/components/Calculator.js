import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ButtonBox from './ButtonBox';
import Button from './Button';
import Screen from './Screen';
import calculate from '../logic/calculate';

const btnValues = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const Calculator = ({ children }) => {
  const [calc, setCalc] = useState({});

  const btnClickHandle = (btnValue) => {
    const newCalc = calculate(calc, btnValue);
    setCalc(newCalc);
  };

  return (
    <div className="Wrapper">

      {children}

      <Screen />
      <ButtonBox>
        {btnValues.map((row) => (
          row.map((btn) => (
            <Button
              value={btn}
              key={uuidv4()}
              onClick={() => btnClickHandle(btn)}
            />
          ))
        ))}
      </ButtonBox>
    </div>
  );
};

Calculator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Calculator;
