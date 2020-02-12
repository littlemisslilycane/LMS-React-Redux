export const FIND_TOPIC = "FIND_TOPIC"
export const UPDATE_TOPIC = "UPDATE_TOPIC"
export const CREATE_TOPIC = "CREATE_TOPIC"
export const DELETE_TOPIC = "DELETE_TOPIC"

export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    topic: topic
})

export const findTopic = (topic) => ({

    type: FIND_TOPIC,
    topic: topic
})

export const deleteTopic = (topic) =>({
    type: DELETE_TOPIC,
    topic: topic
})

export const updateTopic = (topic,topicId) => ({
    type: UPDATE_TOPIC,
    updatedTopic: topic,
    topicId: topicId
})