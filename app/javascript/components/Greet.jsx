import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreet } from '../redux/greetings/greetingSlice';

const Greet = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((store) => store.greeting.value);

  const handleClick = () => {
    dispatch(fetchGreet());
  };

  return (
    <div>
      <button onClick={handleClick}>Greet me!</button>
      <h2>{greeting}</h2>
    </div>
  );
};

export default Greet;
