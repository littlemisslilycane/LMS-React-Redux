export const FIND_LESSONS = "FIND_LESSONS"
export const UPDATE_LESSONS = "UPDATE_LESSONS"
export const CREATE_LESSON = "CREATE_LESSON"
export const DELETE_LESSON = "DELETE_LESSON"

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    lesson: lesson
})

export const findLessons = (lesson) => ({

    type: FIND_LESSONS,
    lesson: lesson
})

export const deleteLesson = (lesson) =>({
    type: DELETE_LESSON,
    lesson: lesson
})

export const updateLesson = (lesson,lessonId) => ({
    type: UPDATE_LESSONS,
    updatedLesson: lesson,
    lessonId: lessonId
})