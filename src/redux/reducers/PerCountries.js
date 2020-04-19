import {
    GET_PERCOUNTRIES_SUCCESS
} from '../actionTypes';

const INIT_STATE = {
    perCountry : {}
}

export default (state=INIT_STATE, action) => {
    switch (action.type) {
        case GET_PERCOUNTRIES_SUCCESS:
            return {
                ...state,
                perCountry: action.payload
            }

        default:
            return state;
    }
}