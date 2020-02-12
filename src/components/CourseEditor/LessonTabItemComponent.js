import React from 'react'
import {deleteLesson as deleteLessonService} from "../../services/LessonService"
import {connect} from 'react-redux'
import {deleteLesson as deleteLessonAction} from "../../actions/lessonActions";

const LessonTabItemComponent = ({lessonTitle, lessonId,deleteLesson,lesson}) =>

    <li className="nav-item wbdv-page-tab row">
        <a className="nav-link col-6" data-toggle="tab" role="tab"
           href="#">{lessonTitle}</a>
        <a href="#" className="btn fa fa-pencil col-3"></a>
        <a href="#" onClick={()=>deleteLesson(lessonId)} className="btn fa fa-trash col-3"></a>
    </li>


const stateToPropertyMapper = (state) => {
    {
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteLesson: (lessonId) => {
            deleteLessonService(lessonId)
                .then(actualLesson => dispatch(
                    deleteLessonAction(lessonId)
                ))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(LessonTabItemComponent)

