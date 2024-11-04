import React, { useState } from 'react';

const ExampleFunctionalComponent = () => {
  const [message, setMessage] = useState('Hello from functional component');

  return (
    <div>{message}</div>
  );
};

export default ExampleFunctionalComponent;
