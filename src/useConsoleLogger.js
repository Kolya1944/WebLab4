import { useEffect } from 'react';

const useConsoleLogger = (value) => {
  useEffect(() => {
    console.log('Logged value:', value);
  }, [value]);
};

export default useConsoleLogger;
