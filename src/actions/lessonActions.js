import {CREATE_MODULE} from "./moduleActions";
export const FIND_LESSONS = "UPDATE_MODULE"
export const CREATE_LESSON = "CREATE_LESSON"

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    lesson: lesson
})



export const findLessons = (lesson) => ({
    type: FIND_LESSONS,
    lesson: lesson
})