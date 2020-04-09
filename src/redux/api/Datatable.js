import req from '../api/Caller';
import {BASE_URL} from '../actionTypes';

export const pageChange=async ({page})=>{
    const url=`${BASE_URL}${page}`;
    return await req.appGet(url);
}