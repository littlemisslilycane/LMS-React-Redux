import {CREATE_TOPIC,FIND_TOPIC,DELETE_TOPIC,UPDATE_TOPIC} from "../actions/topicActions";

const initState = {
    topics: []
}

const topicReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case FIND_TOPIC:
            return {
                topics: action.topic
            }

        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(topic => topic._id === action.topicId ? action.updatedTopic: topic)
            }
        case DELETE_TOPIC:
            return {
                topics:
                    state.topics.filter(topic => topic._id != action.topic)
            }
        default:

            return state;
    }

}
export  default topicReducer;