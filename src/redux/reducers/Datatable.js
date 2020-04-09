import {
    INIT_TABLE,
    PAGE_CHANGE,
    PAGE_CHANGE_SUCCESS,
} from "../actionTypes";

const INIT_STATE = {
    data: {},
    columns: [],
    pageUrl: '',
    totalRows: 0,
    searchValue: '',
    convertData: {},
}

const convertToDataTable = (data, convertData) => {
    // console.log(data);
    const res = []
    data.forEach((d, idx) => {
        const cd = (convertData && convertData(d)) || d;
        cd.no_urt = `${idx + 1}.`;
        if (cd) res.push(cd);
    });

    return res;
}


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case INIT_TABLE: {
            const { convertData } = state;
            console.log("check : ", action.payload);
            
            const { uri, onConvertData } = action.payload;
            convertData[uri] = onConvertData
            return {
                ...INIT_STATE,
                convertData: { ...convertData },
                searchValue: '',
            }
        }

        case PAGE_CHANGE: {
            const { pageNum, page, perPage } = action.payload;
            // if(pageNum)state.pageNum=pageNum;
            // if(perPage)state.perPage=perPage;
            return {
                ...state,
                pageUrl: page
            }
        }

        case PAGE_CHANGE_SUCCESS: {
            const { data, uri } = action.payload;
            const { convertData } = state;
            const dataTable = convertToDataTable(data.countries, convertData[uri]);
            state.data[uri] = dataTable;
            return {
                ...state,
                data: { ...state.data },
                totalRows: data.total
            }
        }

        default:
            return state;
    }
}