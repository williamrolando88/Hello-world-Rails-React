import React from 'react';
import { useSelector } from 'react-redux';

const Greet = () => {
  const greeting = useSelector((store) => store.greetings.greet);

  return (
    <div>
      <div>{greeting}</div>
      <button>Greet me!</button>
    </div>
  );
};

export default Greet;
