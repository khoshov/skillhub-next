const initialState = {};

const SET_CATEGORY = 'SET_CATEGORY';

export const setCategories = () => (dispatch) => {
    fetch('https://api.skillhub.ru/categories/?format=json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((response) =>
            dispatch({
                type: SET_CATEGORY,
                payload: response,
            }),
        );
};

export const categories = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
