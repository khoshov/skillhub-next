import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunkMiddleware from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper"
import {rootReducer} from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
)(createStore);

const makeStore = () => createStoreWithMiddleware(rootReducer);

export const wrapper = createWrapper(makeStore)