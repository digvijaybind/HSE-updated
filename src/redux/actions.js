/*eslint-disable*/
export const SET_CURRENCY='SET_CURRENCY'
export const SET_LOCATION='SET_LOCATION'
export const SET_EXCHANGE_RATE='EXCHANGE_RATE'
export const SET_DARK_MODE='SET_DARK_MODE'
export const setCurrency=currency=>dispatch=>{
    dispatch({
        type:SET_CURRENCY,
        payload:currency
    })
}
export const setLocation=location=>dispatch=>{
    dispatch({
        type:SET_LOCATION,
        payload:location
    })
}
export const setecxhangeRate=rate=>dispatch=>{
    dispatch({
        type:SET_EXCHANGE_RATE,
        payload:rate
    })
}
export const setDarkMode=darkMode=>dispatch=>{
    dispatch({
        type:SET_DARK_MODE,
        payload:darkMode
    })
}