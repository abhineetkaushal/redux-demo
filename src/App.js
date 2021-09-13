import { useState,useEffect } from 'react';
import {connect, useDispatch,useSelector} from 'react-redux';
import './App.css';
import { decrementCount, incrementCount, toggleLight } from './store/actions';
  
function App(props) {
  const {count,incrementCount,decrementCount,lightBulb:{on},toggleLight}  = props;
  console.log({on})
  return (
    <>
        <div>Counter: {count} </div>
        <div>ON : {String(on)}</div>
        <button onClick={incrementCount}>
          Increment
        </button>
        <button onClick={decrementCount}>
          Decrement
        </button>
        <button onClick={toggleLight}>
          toggle Light
        </button>
    </>
  );
}
const mapStateToProps = (state)=>{
  return {
    count:state.count.count,
    lightBulb:state.lightBulb
  }
};
const mapDispatchToProps = (dispatch)=>{
  return {
    incrementCount:  ()=>dispatch(incrementCount(1)),
    decrementCount : ()=> decrementCount(dispatch),
    toggleLight : ()=> dispatch(toggleLight())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
