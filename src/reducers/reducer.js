import {createAction, createReducer} from 'redux-act';

export const testAction = createAction('testAction');
export const testAction1 = createAction('testAction1', (res) => {
    return res
});
export const menuAction = createAction('menuAction', (resMenu) => {
    return resMenu
});

// console.log('testAction', testAction)
export const reducer = createReducer(
    {
        [`${testAction}`]: (state) => ({...state, test: 1}),
        [`${testAction1}`]: (state, payload) => ({...state, test: payload}),
    }, {test: 0})

export const reducer1 = createReducer(
    {
        [`${testAction}`]: (state) => ({...state, test: 1}),
        [`${testAction1}`]: (state, payload) => ({...state, test: payload}),
    }, {test: 0})

export const reducerMenu = createReducer(
    {
        // [`${testAction}`]: (state) => ({...state, test: 1}),
        // [`${testAction1}`]: (state, payload) => ({...state, test: payload}),
        [`${menuAction}`]: (state, payload) => ({...state, menus: payload}),
    }, {menus: [{}]})