import {combineReducers} from "redux";
import {categories} from "./categories/categories";
import {reducer, reducer1, reducerMenu} from "./reducer";
import {filters} from './filters/filters';

export const rootReducer = combineReducers({categories, filters, reducer, reducer1, reducerMenu});