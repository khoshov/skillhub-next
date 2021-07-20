import {combineReducers} from "redux";
import {categories} from "./categories/categories";
import {filters} from './filters/filters';
import {courses} from './courses/courses';

export const rootReducer = combineReducers({categories, filters, courses});