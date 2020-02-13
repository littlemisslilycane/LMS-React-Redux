import React from "react";
import {connect} from "react-redux";
import {
    createLesson as createLessonService,
    findLessonsForModule as findLessonsService,
    updateLesson as updateLessonService
} from '../../services/LessonService'
import LessonTabItemComponent from "./LessonTabItemComponent";
import {createLesson,findLessons,updateLesson} from "../../actions/lessonActions"


class LessonTabsComponent extends React.Component {
    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    componentDidUpdate(prevProps){
        if((this.props.moduleId !== prevProps.moduleId)) {
            this.props.findLessonsForModule(this.props.moduleId)
        }

    }

    state = {
        editingLessonId: '',
        currentLessonTitle: '',
        activeLessonId: this.props.lessonId,
    }
    render() {
        return (
            <div className="col-sm-8 mt-3">
                <ul className="nav nav-tabs">
                    {this.props.lessons && this.props.lessons.map(lesson =>
                            <LessonTabItemComponent key={lesson._id}
                                                    lessonTitle = {lesson.title}
                                                    lessonId = {lesson._id}
                                                    lesson = {lesson}
                                                    active={lesson._id === this.state.activeLessonId}
                                                    editing={this.state.editingLessonId === lesson._id}
                                                    currentLessonTitle = {this.state.currentLessonTitle}
                                                    onChangeEdit={e =>
                                                        this.setState({
                                                            currentLessonTitle: e.target.value
                                                        })
                                                    }
                                                    edit={() => {
                                                        this.setState({
                                                            activeLessonId: lesson._id
                                                        })
                                                        this.setState({
                                                            editingLessonId: lesson._id,
                                                            currentLessonTitle: lesson.title
                                                        })
                                                    }}
                                                    save={() => {
                                                        this.props.saveLesson(this.state.currentLessonTitle, this.state.editingLessonId)
                                                        this.setState({
                                                            currentLessonTitle: '',
                                                            editingLessonId: ''
                                                        })

                                                    }}
                                                        select={() => {
                                                        this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`)
                                                        this.setState({
                                                            activeLessonId: lesson._id
                                                    })
                                                    }}
                            />

                    )}
                    <li className="nav-item pr-3 wbdv-page-tab"><a
                        onClick={() => this.props.createLesson(this.props.moduleId)}
                        className="nav-link btn wbdv-new-page-btn fa fa-plus " href="#"></a></li>
                </ul>
            </div>
        )
    }

}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (moduleId) => {
            createLessonService(moduleId, 'New Lesson')
                .then(actualLesson =>
                    dispatch(
                        createLesson(actualLesson)
                    ))
        },
        findLessonsForModule: (moduleId) => {

            findLessonsService(moduleId)
                .then(actualLesson =>
                    dispatch(findLessons(actualLesson)))

        },
        saveLesson: (newLessonTitle, editingLessonId) => {
            updateLessonService(editingLessonId,newLessonTitle)
            .then(
                dispatch(updateLesson({title: newLessonTitle}, editingLessonId))
            )
        }
    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabsComponent)

