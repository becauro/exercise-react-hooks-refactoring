// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({children}) {

    const [ cars_signal, setCars_Signal] = useState({
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    })
  

  const moveCar = (car, side) => {
    setCars_Signal({
      ...cars_signal,
      cars: {
        ...cars_signal.cars,
        [car]: side,
      },
    });
  };

  const changeSignal = (signalColor) => {
    setCars_Signal({
      ...cars_signal,
      signal: {
        ...cars_signal.signal,
        color: signalColor,
      },
    });
  };


    const context = {
      cars_signal,
      moveCar,
      changeSignal,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
