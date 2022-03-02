import { LOGIN, LOGOUT, AUTHERROR, LOADING } from './action-types'
import * as api from '../../Api/UserApi'


export const Login = (name, email, social_id, image, social_type) => async(dispatch) => {
    try{
        dispatch({type: LOADING})
        const{data} = await api.Login(name, email, social_id, "facebook")
        const f = {
            token: data.api_token,
            user:{
                name: name,
                email: email,
                image: image,
                date: data.created_at
            }
        };
        console.log("F in login = " + JSON.stringify(f))
        dispatch({type: LOGIN, payload: {...f}})
    }
    catch(error){
        dispatch({type: AUTHERROR, payload: {error}})
    }
}

export const Register = (token) => async(dispatch) => {
    try{
        const {data} = await api.Register(token)

        dispatch({type: LOGIN, payload: data})
    }catch(error){
        dispatch({type: AUTHERROR, payload: {error}})
        
    }
}

export const Logout = () => async(dispatch) => {
    dispatch({type: LOGOUT})
}
