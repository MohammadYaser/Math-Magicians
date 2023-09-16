import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({});

  return (
    <CalcContext.Provider value={{ calc, setCalc }}>
      {children}
    </CalcContext.Provider>
  );
};

CalcProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export const useCalc = () => useContext(CalcContext);
