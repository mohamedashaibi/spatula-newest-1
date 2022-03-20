import { COURSE_ERROR, GET_ALL_COURSES, GET_COURSE, GET_COURSES, CLEAR_COURSES, IS_LOADING, ADD_COURSE, GET_LESSONS, GET_LESSON, GET_TRANSACTION, FINISH_TRANSACTION, GET_ADVERTS} from "../Actions/Courses/action-types"

const initialState = {
    allcourses: [],
    usercourses: [],
    course:{},
    error:{},
    lessons: [],
    lesson: {},
    transactionId: "",
    isLoading: true, 
    topAds: [],
    bottomAds: [],
    operationStatusCode: ''
}

export const CourseReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case IS_LOADING:
            return ({...state, isLoading: true})
        case GET_ALL_COURSES:
            return({...state, usercourses: [...payload], isLoading: false})
        case ADD_COURSE:
            return({...state, course: [...payload], isLoading: false})    
        case GET_COURSES:
            return({...state, isLoading: false, allcourses: [...payload.filter(element=>{
                return state.usercourses.filter((el)=>{
                    return el.course_id == element.id
                }).length == 0
                
            })]})
        case GET_COURSE:
            return({...state, course: {...payload}, allcourses:[], isLoading: false})
        case CLEAR_COURSES:
            console.log("in clear courses")
            return({...state,
                allcourses: [],
                usercourses: [],
                course:{},
                error:{},
                lessons: [],
                lesson: {},
                transactionId: "",
                isLoading: false,
                operationStatusCode: ''
            })
        case GET_LESSONS:
            return ({...state, lessons: [...payload], isLoading: false, });    
        case GET_LESSON:
            return ({...state, lesson: {...payload}, isLoading: false, });        
        case COURSE_ERROR:
            return({...state, error: {...payload}, isLoading: false})
        case GET_TRANSACTION:
            return({...state, transactionId: payload, isLoading: false})
        case FINISH_TRANSACTION:
            return({...state, transactionId: '', operationStatusCode: payload.operationStatusCode + '', isLoading: false})    
        case GET_ADVERTS:
            return({...state, topAds: [...payload.tops], bottomAds: [...payload.bottom], isLoading: false})   
        default:
        return state

    }
}