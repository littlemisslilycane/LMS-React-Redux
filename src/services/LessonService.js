import {API_LINK} from "../common/constants";

export const createLesson = (moduleId, lesson) => {

    const response = fetch(`${API_LINK}/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify({title: lesson}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        return response.json()
    })

    return response;

}

export const findLessonsForModule = (moduleId) => {
    const response = fetch(`${API_LINK}/modules/${moduleId}/lessons`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    })
    return response;

}

export const deleteLesson = (lessonId) => {
    
    const response = fetch(`${API_LINK}/lessons/${lessonId}`, {
        method: 'DELETE'
    }).then(response => {
        return response.json()
    })
    return response;
}
export default {
    createLesson, findLessonsForModule, deleteLesson
}