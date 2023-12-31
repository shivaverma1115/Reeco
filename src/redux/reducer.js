// import dbData from '../db.json';
// import dbData from '../db.json';

import { getData_Error, getData_Pending, getData_Successful, getData_isStatus } from './actionType';

const initialState = {
    items: [],
    pending: false,
    error: false
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case getData_Pending:
            return {
                ...state,
                pending: true,
                error: false
            }
        case getData_Successful:
            return {
                ...state,
                pending: false,
                items: payload.data,
                error: false
            }
        case getData_Error:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state
    }
}