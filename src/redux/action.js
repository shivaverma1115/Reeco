import { getData_isStatus, getData_Error, getData_Pending, getData_Successful } from "./actionType"
import axios from 'axios'


export const getTableData = () => {
    return (dispatch) => {
        dispatch({ type: getData_Pending });
        axios.get('https://recco-data.onrender.com/arr')
            .then(res => {
                dispatch({ type: getData_Successful, payload: res });
            })
            .catch(error => {
                dispatch({ type: getData_Error, payload: error })
            })
    }
}
// export const getChangeStatus = (action) => {
//     const {id,payload} = action ;
//     console.log(id) ;
//     return (dispatch) => {
        // dispatch({ type: getData_Pending });
        // axios.patch(`https://recco-data.onrender.com/arr/${id}`,{Status:payload})
            // .then(res => {
            //     dispatch({ type: getData_isStatus, payload: res });
            // })
            // .catch(error => {
            //     console.log(error) ;
            //     // dispatch({ type: getData_Error, payload: error })
            // })
//     }
// }
