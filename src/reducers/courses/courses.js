const initialState = {};

const SET_COURSES = 'SET_COURSES';

export const setCourses = () => (dispatch) => {
    fetch('https://api.skillhub.ru/courses/?format=json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((response) =>
            dispatch({
                type: SET_COURSES,
                payload: response,
            }),
        );
};

export const courses = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
