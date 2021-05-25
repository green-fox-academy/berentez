import { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [acorn, setAcorn] = useState(0);

  const increaseByOne = () => setAcorn(acorn + 1);
  const decreaseByOne = () => setAcorn(acorn - 1);

  return (
    <div>
      <Button handleClick={increaseByOne} text={'Buy one'} />
      <Display acorn={acorn} />
      <Button handleClick={decreaseByOne} text={'Eat one'} />
    </div>
  );
}

export default App;
