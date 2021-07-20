import {createAction, createReducer} from 'redux-act';

export const setFilters = createAction('setFilters', (data) => data);

export const filters = createReducer(
    {
        [`${setFilters}`]: (state, payload) => ({...state, ...payload}),
    }, {
        name: '',
        isOnlyFree: false,
        durationFrom: '',
        durationTo: '',
        priceFrom: '',
        priceTo: '',
        format: '',
        level: '',
    })