import * as actions from "./actionTypes"
import axios from "axios"



export const fetchData = () => {
    return async (dispatch) => {
        await axios.get('http://127.0.0.1:4000/data')
            .then(res => {
                console.log(res.data)
                // localStorage.setItem("data",JSON.stringify(res.data))
                dispatch({ type: actions.FETCH_DATA_SUCCESS, payload: res.data });
            })
            .catch(e => {
                dispatch({ type: actions.FETCH_DATA_ERROR, payload: e.message })
            })
    }
}