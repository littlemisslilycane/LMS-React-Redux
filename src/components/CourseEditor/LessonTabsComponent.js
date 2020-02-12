import React from "react";
import {connect} from "react-redux";
import {
    createLesson as createLessonService,
    findLessonsForModule as findLessonsService
} from '../../services/LessonService'
import LessonTabItemComponent from "./LessonTabItemComponent";
import {createLesson,findLessons} from "../../actions/lessonActions"

class LessonTabsComponent extends React.Component {

    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }

    render() {
        return (
            <div className="col-sm-8 mt-3">
                <ul className="nav nav-tabs border-0">
                    {this.props.lessons && this.props.lessons.map(lesson =>
                        <LessonTabItemComponent key={lesson._id}/>
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
        modules: state.lessons.lessons
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
                .then(lesson =>
                    dispatch(findLessons(lesson)))

        }
    }

}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabsComponent)

