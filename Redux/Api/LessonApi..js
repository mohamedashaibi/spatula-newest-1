import axios from '../../axios';

const url = "/lessons";

export const GetCourseLessons = (id) => axios.get(url + "/courselessons/" + id);
export const GetLesson = (id) => axios.get(url + "/" + id)
