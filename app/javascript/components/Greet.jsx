import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingData } from '../redux/greetings/greetingsReducer';

const Greet = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((store) => store.greetingsReducer);

  const handleClick = () => {
    dispatch(fetchingData);
  };

  return (
    <div>
      <div>{greeting}</div>
      <button onClick={handleClick}>Greet me!</button>
    </div>
  );
};

export default Greet;
