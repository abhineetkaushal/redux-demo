import {createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
    count:0
}

// action - > Type , Payload
 
export const incrementCount =(number)=> (dispatch)=>{
    dispatch({type:"INCREMENT"})
}

export const decrementCount = (dispatch)=>{
    dispatch({type:"DECREMENT"})
}


const countReducer = (state=initialState, action)=>{
    switch(action.type){
        case "INCREMENT":
            console.log("Reducer Called: Increment")
            // state.count = state.count+1;
            return {...state,count:state.count+1}
        case "DECREMENT":
            return {...state,count:state.count-1}
        default:
            return state;
    }

}

const middlewares = [thunk];
const store = createStore(countReducer, composeWithDevTools(applyMiddleware (...middlewares)));

export default store;