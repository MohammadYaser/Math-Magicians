import PropTypes from 'prop-types';
import React from 'react';
import { useCalc } from './CalcContext';
import calculate from '../logic/calculate';

const getStyleName = (btn) => {
  const className = {
    '=': 'equal',
    0: 'zero',
    '+': 'opt',
    '-': 'opt',
    x: 'opt',
    '÷': 'opt',
    '': 'empty',
  };

  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useCalc();

  const btnClickHandle = (btnValue) => {
    const newCalc = calculate(calc, btnValue);
    setCalc(newCalc);
  };

  return (
    <button onClick={() => btnClickHandle(value)} type="button" className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Button;
