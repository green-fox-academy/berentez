import React from 'react';

import { useState, useEffect } from 'react';

import Button from './Button';
import Display from './Display';

const WithStates = () => {
  const [acorn, setAcorn] = useState(0);

  const increaseByOne = () => setAcorn(acorn + 1);
  const decreaseByOne = () => acorn > 0 && setAcorn(acorn - 1);
  const increaseByKey = (event) => event.keyCode === 38 && setAcorn(acorn + 1);
  const decreaseByKey = (event) => event.keyCode === 40 && acorn > 0 && setAcorn(acorn - 1);

  useEffect(() => {
    window.addEventListener('keydown', increaseByKey);
    window.addEventListener('keydown', decreaseByKey);

    return () => {
      window.removeEventListener('keydown', increaseByKey);
      window.removeEventListener('keydown', decreaseByKey);
    };
  });

  return (
    <div className="display">
      <Button handleClick={increaseByOne} text={'Buy one'} />
      <Display acorn={acorn} />
      <Button handleClick={decreaseByOne} text={'Eat one'} />
    </div>
  );
};

export default WithStates;
