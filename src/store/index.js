import { combineReducers } from "redux";
import { kittyReducer } from "./reducer/reducer";

const allReducers = combineReducers({
    kitty: kittyReducer,
})
export default allReducers;