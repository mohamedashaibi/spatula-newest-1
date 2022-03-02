import axios from '../../axios';
import store from '../store';

export const AddCourse = (id) => axios.get("/addFreeCourse/" + id);
export const GetUserCourses = () => axios.post("/userOrders", data = {
    "api_token": store.getState().auth.auth.token
})
export const GetFreeCourses = () => axios.get("/getFreeCourses")
export const GetPaidCourses = () => axios.post("/getPaidCourses",data = {
    "api_token": store.getState().auth.auth.token
})
export const GetCourse = (id) => axios.post('/getCourseData', data = {
    "api_token": store.getState().auth.auth.token,
    "course_id": id
})

export const InitPayment = (course_id, phone) => axios.post('/initializeTPayPayment', data={
    "api_token": store.getState().auth.auth.token,
    "course_id": course_id,
    "phone": phone
})

export const ConfirmPayment = (course_id, pinCode, transactionId) => axios.post('confirmTPayPayment', data={
    "api_token": store.getState().auth.auth.token,
    "course_id": course_id,
    "pinCode": pinCode,
    "transactionId": transactionId
})

export const GetAds = () => axios.get('getHomeView')