import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import {reducer, reducer1, reducerMenu} from "./reducers/reducer"

const middleware = [thunk]
const reducers = combineReducers({reducer, reducer1, reducerMenu});

const makeStore = () => createStore(reducers, compose(applyMiddleware(...middleware)))
console.log('makeStore', makeStore)
// console.log('store', store.getState())

export const wrapper = createWrapper(makeStore)