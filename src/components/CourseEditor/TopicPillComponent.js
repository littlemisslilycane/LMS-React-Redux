import React from "react";
import {connect} from "react-redux";
import {
    createTopic as createTopicService,
    findTopicsForLesson as findTopicsService,
    updateTopics as updateTopicsService
} from '../../services/TopicService'
import {createTopic, findTopic, updateTopic} from "../../actions/topicActions"
import TopicPillItemComponent from "./TopicPillItemComponent";


class TopicPillComponent extends React.Component {
    componentDidMount() {

        this.props.findTopicsForLesson(this.props.lessonId)

    }

    componentDidUpdate(prevProps) {
        if (this.props.lessonId !== prevProps.lessonId) {
            this.props.findTopicsForLesson(this.props.lessonId)

        }

    }

    state = {
        editingTopicId: '',
        currentTopicTitle: '',
        activeTopicId: this.props.topicId,
    }

    render() {
        return (
            <ul className="nav nav-pills wbdv-topic-pill-list mt-3">
                {this.props.topics && this.props.topics.map(topic =>
                    <TopicPillItemComponent key={topic._id}
                                            topic={topic}
                                            active={topic._id === this.state.activeTopicId}
                                            editing={this.state.editingTopicId === topic._id}
                                            currentTopicTitle={this.state.currentTopicTitle}
                                            onChangeEdit={e =>
                                                this.setState({
                                                    currentTopicTitle: e.target.value
                                                })
                                            }
                                            edit={() => {
                                                this.setState({
                                                    editingTopicId: topic._id,
                                                    currentTopicTitle: topic.title
                                                })
                                            }}
                                            save={() => {
                                                this.props.saveTopic(this.state.currentTopicTitle, this.state.editingLessonId)
                                                this.setState({
                                                    currentTopicTitle: '',
                                                    editingTopicId: ''
                                                })

                                            }}
                                            select={() => {
                                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic._id}`)
                                                this.setState({
                                                    activeTopicId: topic._id
                                                })
                                            }}

                    />
                )}
                <li className="nav-item wbdv-topic-pill">
                    <a href="#"
                       onClick={() => this.props.createTopic(this.props.lessonId)}
                       className="nav-link btn wbdv-topic-add-btn"> <i className="fa fa-plus"></i></a>
                </li>
            </ul>

        )
    }

}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopic: (lessonId) => {

            createTopicService(lessonId, 'New Topic')
                .then(actualTopic =>
                    dispatch(
                        createTopic(actualTopic)
                    ))
        },
        findTopicsForLesson: (lessonId) => {

            findTopicsService(lessonId)
                .then(actualTopic =>
                    dispatch(findTopic(actualTopic)))

        },
        saveTopic: (newTopicTitle, editingTopicId) => {
            updateTopicsService(editingTopicId, newTopicTitle)
                .then(
                    dispatch(updateTopic({title: newTopicTitle}, editingTopicId))
                )
        }
    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPillComponent)

