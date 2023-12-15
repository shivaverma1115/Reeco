// import dbData from '../db.json';
import dbData from '../db.json';

import { getData_Error, getData_Pending, getData_Successful, getData_isStatus } from './actionType';

const initialState = {
    items: [
        {
            "id":1,
            "img": "https://res.cloudinary.com/dbbuqesjg/image/upload/v1702569240/Image/Avocado_Hass_ajhv0z.jpg",
            "product_name": "chicken Breast Filets, Boneless matuu maMarinated 6 Ounce Raw, Invivid",
            "Brand": "Hormel Black Labelmany",
            "Price": 60.67,
            "Quantity": 0,
            "Total": 0,
            "Status": ""
        }
    ],
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
                items: [],
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