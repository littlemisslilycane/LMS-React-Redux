import {CREATE_LESSON, FIND_LESSONS, DELETE_LESSON, UPDATE_LESSONS} from "../actions/lessonActions";

const initState = {
    lessons: []
}

const lessonReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case FIND_LESSONS:
            return {
                lessons: action.lesson
            }
        case UPDATE_LESSONS:
            return {
                lessons: state.lessons.map(lesson => lesson._id === action.lessonId ? action.updatedLesson: lesson)
            }
        case DELETE_LESSON:
            return {
                lessons:
                    state.lessons.filter(lesson => lesson._id != action.lesson)
            }
        default:
            debugger;
            return state;
    }

}
export  default lessonReducer