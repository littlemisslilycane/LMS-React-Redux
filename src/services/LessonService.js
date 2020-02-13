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

export const findLesson = (lessonId) => {
    const response = fetch(`${API_LINK}/lessons/${lessonId}`, {
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

export const updateLesson = (lessonId,lesson) =>{
    const response = fetch(`https://wbdv-generic-server.herokuapp.com/api/001387987/lessons/${lessonId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: lesson})
    }).then(response => {return response.json()})
    return response;
}

