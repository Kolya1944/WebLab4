import './App.css';
import React, { useState, useEffect } from 'react';
import useOnlineStatus from './useOnlineStatus';
import useConsoleLogger from './useConsoleLogger';

const App = () => {
  const [count, setCount] = useState(0);
  const isOnline = useOnlineStatus();
  useConsoleLogger(count);

  useEffect(() => {
    document.title = `Ви натиснули ${count} разів`;
  }, [count]);

  useEffect(() => {
    console.log(`Ви зараз ${isOnline ? 'онлайн' : 'офлайн'}`);
  }, [isOnline]);

  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>Натисни мене</button>
      <p>{isOnline ? 'Ви в мережі' : 'Ви не в мережі'}</p>
    </div>
  );
};

export default App;
