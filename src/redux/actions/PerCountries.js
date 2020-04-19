import {
    GET_PERCOUNTRIES,
    GET_PERCOUNTRIES_SUCCESS
} from '../actionTypes'

export const getPercountry = (country) => ({type: GET_PERCOUNTRIES, payload:{country}});
export const getPercountrySuccess = (data) => ({type: GET_PERCOUNTRIES_SUCCESS, payload: data});