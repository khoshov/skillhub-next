import {createAction, createReducer} from 'redux-act';

export const testAction = createAction('testAction');

export const reducer = createReducer(
    {
        [`${testAction}`]: (state) => ({...state, test: 1})
    }, {test: 0})