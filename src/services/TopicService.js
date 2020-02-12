import {API_LINK} from "../common/constants";

export const createTopic = (lessonId, topic) => {

    const response = fetch(`${API_LINK}/lessons/${lessonId}/topics`, {
        method: 'POST',
        body: JSON.stringify({title: topic}),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        return response.json()
    })

    return response;

}

export const findTopicsForLesson = (lessonId) => {
    const response = fetch(`${API_LINK}/lessons/${lessonId}/topics`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    })
    return response;

}

export const deleteTopic = (topicId) => {

    const response = fetch(`${API_LINK}/topics/${topicId}`, {
        method: 'DELETE'
    }).then(response => {
        return response.json()
    })
    return response;
}

export const updateTopics = (topicId,topic) =>{
    const response = fetch(`https://wbdv-generic-server.herokuapp.com/api/001387987/topics/${topicId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: topic})
    }).then(response => {return response.json()})
    return response;
}

export default {
    createTopic, findTopicsForLesson, deleteTopic,updateTopics
}