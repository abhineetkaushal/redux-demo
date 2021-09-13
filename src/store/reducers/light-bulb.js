
const lightBulbReducer = (state={on:false},action)=>{
    switch(action.type){
        case "ON":
            return {...state,on:true}
        case "OFF":
            return {...state,on:false}
        case "TOGGLE":
            return {...state,on:!state.on}
        default:
            return state;
    }
}
export default lightBulbReducer;