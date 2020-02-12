import {CREATE_LESSON,FIND_LESSONS} from "../actions/lessonActions";

const initState = {
    lessons: []
}

const lessonReducer = (state = initState, action) => {
    switch (action) {
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
        default:
            debugger;
            return state;
    }

}
export  default lessonReducer