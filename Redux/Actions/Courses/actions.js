import { GET_COURSE, GET_COURSES, COURSE_ERROR, CLEAR_COURSES, GET_ALL_COURSES, IS_LOADING, ADD_COURSE, GET_LESSONS, GET_LESSON, GET_TRANSACTION, FINISH_TRANSACTION, GET_ADVERTS } from './action-types'
import * as api from '../../Api/CourseApi'
import store from '../../store'
import * as LessonApi from '../../Api/LessonApi.'
import AppLoading from 'expo-app-loading'

export const AddCourse = (id, is_paid) => async(dispatch) =>{
   if(store.getState().courses.course.cost == 0){
       try{
       const {data} = await api.AddCourse(id);

       dispatch({type: ADD_COURSE, payload: {...data}})
       }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
       }
   }else{
       console.log("Paid")
   }
}

export const GetUserCourses = () => async(dispatch)=>{
    try{
        dispatch({type: IS_LOADING});
        const {data} = await api.GetUserCourses();
        dispatch({type: GET_ALL_COURSES, payload: [...data.orders]})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetFreeCourses = () => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING});

        const {data} = await api.GetFreeCourses()
        dispatch({type: GET_COURSES, payload: [...data]})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetPaidCourses = () => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING});

        dispatch(GetUserCourses()).then(async()=>{

            const {data} = await api.GetPaidCourses();

            dispatch({type: GET_COURSES, payload: [...data]})
    
        })

    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})       
    }
}

export const GetCourse = (id) => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING});

        const {data} = await api.GetCourse(id)

        dispatch({type: GET_COURSE, payload:{...data}})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetCourseLessons = (id) => async(dispatch) => {
try{
    const { data } = await LessonApi.GetCourseLessons(id)

    dispatch({type: GET_LESSONS, payload: [...data]});

}catch(error){
    dispatch({type: COURSE_ERROR, payload: {error}})

}
}

export const InitializePayment = (course_id, phone) => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING});

        const {data} = await api.InitPayment(course_id, phone);
        
        console.log("Data in init = " + JSON.stringify(data));

        dispatch({type: GET_TRANSACTION, payload: data.transactionId+""})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const ConfirmPayment = (course_id, pinCode, transactionId) => async(dispatch) =>{
    try{
        dispatch({type: IS_LOADING})

        const {data} = await api.ConfirmPayment(course_id, pinCode, transactionId);

        dispatch({type: FINISH_TRANSACTION})
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetAds = () => async(dispatch) => {
    try{
        dispatch({type: IS_LOADING})

        const {data} = await api.GetAds();

        dispatch({type: GET_ADVERTS, payload: {...data}})

    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    }
}

export const GetLesson = (id) => async(dispatch) => {
    try{
        const { data } = await LessonApi.GetLesson(id)
    
        console.log("In get lesson action lesson = " +JSON.stringify(data))
        dispatch({type: GET_LESSON, payload: {...data}});
    
    }catch(error){
        dispatch({type: COURSE_ERROR, payload: {error}})
    
    }
    }

export const ClearCourses = () => async(dispatch) => {
    dispatch({type: CLEAR_COURSES})
} 

