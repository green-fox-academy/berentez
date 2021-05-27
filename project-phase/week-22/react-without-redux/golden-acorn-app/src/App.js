import React from 'react';
import { useState } from 'react';

import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [acorn, setAcorn] = useState(0);

  const increaseByOne = () => setAcorn(acorn + 1);
  const decreaseByOne = () => acorn > 0 && setAcorn(acorn - 1);
  const increaseByKey = (event) => event.keyCode === 38 && setAcorn(acorn + 1);
  const decreaseByKey = (event) => event.keyCode === 40 && acorn > 0 && setAcorn(acorn - 1);

  document.addEventListener('keydown', increaseByKey);
  document.addEventListener('keydown', decreaseByKey);

  return (
    <div>
      <Button handleClick={increaseByOne} text={'Buy one'} />
      <Display acorn={acorn} />
      <Button handleClick={decreaseByOne} text={'Eat one'} />
    </div>
  );
}

export default App;
