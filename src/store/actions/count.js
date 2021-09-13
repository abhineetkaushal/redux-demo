 
export const incrementCount =(number)=> (dispatch)=>{
    dispatch({type:"INCREMENT"})
}

export const decrementCount = (dispatch)=>{
    dispatch({type:"DECREMENT"})
}
