import axios from '../../axios';

const url = "";

export const Register = (token) => axios.post(`${url}/facebookregister?accessToken=${token}`);

export const Login = (name, email, social_id, social_type) => axios.post(`/login`, {
    name: name,
    email: email,
    social_id: social_id,
    social_type: social_type
});