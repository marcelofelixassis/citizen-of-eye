import { combineReducers } from "redux"
import { deputiesReducer } from "./deputies.reducer";
import { socialReducer } from "./social.reducer";

const rootReducers = combineReducers({
    deputies: deputiesReducer,
    social: socialReducer
});

export default rootReducers;