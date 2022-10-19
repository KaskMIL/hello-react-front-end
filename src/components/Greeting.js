import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingApi } from '../redux/greetingReducer';

function Greeting() {
  const greet = useSelector((state) => state.greet);
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Hello World! from greeting component</h1>
      <button onClick={() => dispatch(getGreetingApi())}>Generate random Greeting!</button>
    </div>
  )
}

export default Greeting;