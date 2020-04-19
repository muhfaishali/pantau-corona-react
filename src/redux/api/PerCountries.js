import req from './Caller';
import {BASE_URL} from '../actionTypes';

const getData = async(country)=>await req.appGet(`${BASE_URL}api/countries/${country}`);

export default {getData};