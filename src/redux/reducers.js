/*eslint-disable*/
import { SET_CURRENCY,SET_LOCATION,SET_EXCHANGE_RATE,SET_DARK_MODE } from "./actions";
const initialState={
    currency:'INR',
    location:'ind',
    rate:1,
    darkMode:true
}
function userReducer(state=initialState,action){
    switch(action.type){
        case SET_CURRENCY:
            return {...state,currency:action.payload}
        case SET_LOCATION:
            return {...state,location:action.payload} 
        case SET_EXCHANGE_RATE:
            return {...state,rate:action.payload}
        case SET_DARK_MODE:
            return {...state,darkMode:action.payload}    
        default:
            return state
    }
   
}
export default userReducer