import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import filterReducer from './filterReducer'

export default combineReducers({
    movie : movieReducer,
    filter : filterReducer,
    
});