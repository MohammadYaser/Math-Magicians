import React from 'react';
import { useCalc } from './CalcContext';

const Screen = () => {
  const { calc } = useCalc();

  return (
    <div className="screen"><span className="result">{calc.next || calc.total || '0'}</span></div>
  );
};

export default Screen;
