import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import { decrementCount, incrementCount } from './store';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count);
  const increment = ()=>{
      dispatch(incrementCount(1)); /// Redux Thunk Way
  }
  const decrement = ()=>{
    decrementCount(dispatch); /// Pure function way
  }
  return (
    <>
        <div>Counter: {count} </div>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
    </>
  );
}

export default App;
