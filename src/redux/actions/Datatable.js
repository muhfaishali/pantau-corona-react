import { 
    INIT_TABLE,
    PAGE_CHANGE,
    PAGE_CHANGE_SUCCESS
} from "../actionTypes";

export const initTable=(onConvertData, uri)=>({type:INIT_TABLE, payload:{onConvertData, uri}});
export const pageChange=(page)=>({type: PAGE_CHANGE, payload:{page}});
export const pageChangeSuccess=(data, uri)=>({type:PAGE_CHANGE_SUCCESS, payload:{data, uri}});