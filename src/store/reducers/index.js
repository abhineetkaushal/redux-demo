import { combineReducers } from "redux";
import countReducer from "./count";
import lightBulbReducer from "./light-bulb";

const rootReducer = combineReducers({
    lightBulb:lightBulbReducer,
    count:countReducer
});

export default rootReducer;