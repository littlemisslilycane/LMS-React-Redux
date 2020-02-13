import React from 'react'
import {deleteLesson as deleteLessonService} from "../../services/LessonService"
import {connect} from 'react-redux'
import {deleteLesson as deleteLessonAction} from "../../actions/lessonActions";

const LessonTabItemComponent = ({lessonTitle, lessonId,deleteLesson,lesson,onChangeEdit,edit,editing,currentLessonTitle,save,active,select}) =>

    <li key= {lessonId} className={`nav-item  wbdv-page-tab  ${active ? 'active':''}`} onClick={select}>
        <a className="nav-link" data-toggle="tab" role="tab"
                        href="#"> {!editing &&<span>{lessonTitle}</span>}
        {!editing && ( <span><a href="#" onClick={edit} className="btn fa fa-pencil"></a></span>)
        }
        {editing && <input type="text" value ={currentLessonTitle} onChange={onChangeEdit}/>  }
        {editing && <a href="#" onClick={save}  className="btn fa fa-save"></a> }
        {editing && <span><a href="#" onClick={()=>deleteLesson(lessonId)} className="btn fa fa-trash"></a></span>}
        </a>
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

