import { LOGOUT, LOGIN, SIGNUP, CLEAR_ERRORS, AUTHERROR, LOADING } from "../Actions/Auth/action-types"

const initialState = {
    isLoading: false,
    auth: {
        token: "",
        user: {},
        facebookUser:{}
    },
    error:{}
}

export const AuthReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case LOGIN:
            return({...state, auth: {...payload}, error:{}, isLoading: false})
        case SIGNUP:
            return({...state, auth: {...payload}, error:{}, isLoading: false})    
        case LOGOUT:
            return({...state, auth:{token:"", user:{}, facebookUser:{}}, error:{}, isLoading: false})
        case AUTHERROR:
            return({...state, error: {...payload}, auth:{token:"", user:{}, isLoading: false}})
        case CLEAR_ERRORS:
            return({...state, error: {}, isLoading: false})
        case LOADING:
            return({...state, error: {}, isLoading: true})
        default:
        return state

    }
}