import ACTION from '../actions/actiontsTypes';

const initialState = {
    data: {},
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION.AUTH_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }
        case ACTION.AUTH_RESPONSE: {
            return {
                ...state,
                data:action.data,
                isFetching: false,
                error: null
            }
        }
        case ACTION.AUTH_ERROR: {
            return {
                ...state,
                data:action.error.response.data,
                isFetching: false,
            }
        }
        default:{
            return state
        }
    }

}