// import dbData from './db.json';
import dbData from '../db.json';
import { getData, getDataApproved } from './actionType';

const initialState = {
    items: dbData.arr,
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case getData:
            return {
                ...state
            }
        case getDataApproved:
            return {
                ...state,
                isApprove:payload
            }
        default:
            return state
    }
}