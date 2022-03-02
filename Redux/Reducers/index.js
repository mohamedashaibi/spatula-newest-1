import { combineReducers } from 'redux';
// import countReducer from './countReducer';
import {AuthReducer} from "./AuthReducer"
import { CourseReducer } from './CourseReducer';

export default combineReducers({
    auth: AuthReducer, 
    courses: CourseReducer
})
