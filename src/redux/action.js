import { getData, getDataApproved } from "./actionType"



export const getTableData = ()=>{
    return {
        type:getData,
    }
}

export  const getApproved = ()=>{
    return {
        type:getDataApproved,
        payload:"Approved" 
    }
}