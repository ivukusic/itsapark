import React, { useEffect, useState } from 'react';
import Button from './common/components/Button';
import TextField from './common/components/TextField';
import './App.scss';
import { calculateDivisible } from './common/utils';

const App = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (error && !!first && !!second) {
      setError('');
    }
  }, [error, first, second]);

  const onProcessPress = () => {
    if (!first || !second) {
      setError('Both fields required');
    } else {
      const { error: message, number } = calculateDivisible({ divider: 3, first, second });
      alert(message || number);
    }
  };

  return (
    <div className="app">
      <TextField
        className="field-container"
        field="first"
        label="First number"
        onChange={e => setFirst(e.target.value)}
        testID="first-text"
        type="number"
        value={first}
      />
      <TextField
        className="field-container"
        field="second"
        label="Second number"
        onChange={e => setSecond(e.target.value)}
        testID="second-text"
        type="number"
        value={second}
      />
      <div className="error-message">{error}</div>
      <Button label="Process" onClick={onProcessPress} testID="process-button" />
    </div>
  );
};

export default App;
