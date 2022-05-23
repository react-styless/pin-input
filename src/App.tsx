import React from 'react';
import PinInput from './PinInput';

function App() {
  const handleComplete = (v: string) => {
    console.log('complete..', v);
  };
  return (
    <div className='App'>
      <PinInput onComplete={handleComplete}>
        <input type='text' className='input1' />
        <input type='text' className='input1' />
        <input type='text' className='input1' />
        <input type='text' className='input1' />
        <input type='text' className='input1' />
        <input type='text' className='input1' />
      </PinInput>
      <PinInput onComplete={handleComplete}>
        <input type='text' className='input2' />
        <input type='text' className='input2' />
        <input type='text' className='input2' />
      </PinInput>
    </div>
  );
}

export default App;
