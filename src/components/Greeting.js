import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingApi } from '../redux/greetingReducer';

function Greeting() {
  const greet = useSelector((state) => state.greet);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Greeting Generator!</h1>
      <button type="button" onClick={() => dispatch(getGreetingApi())}>Generate Greeting</button>
      {greet ? (
        <h2>{greet.greet}</h2>
      ) : null}
    </div>
  );
}

export default Greeting;
