import {combineReducers} from "redux";
import {categories} from "./categories/categories";
import {reducer, reducer1, reducerMenu} from "./reducer";

export const rootReducer = combineReducers({categories, reducer, reducer1, reducerMenu});