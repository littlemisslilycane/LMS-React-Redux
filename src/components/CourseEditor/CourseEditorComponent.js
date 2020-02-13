import React from "react";

import "./CourseEditorComponent-style.css";
import ModuleListComponent from "./ModuleListComponent.js";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from  "../../reducers/lessonReducer";
import LessonTabsComponent from "./LessonTabsComponent.js";
import TopicPillsComponent from "./TopicPillComponent.js";
import {combineReducers, createStore} from "redux";
import WidgetListComponent from "./WidgetListComponent.js";
import {Provider} from "react-redux";
import topicReducer from "../../reducers/topicReducer";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons:lessonReducer,
    topics: topicReducer

})

const store = createStore(rootReducer)
const CourseEditorComponent = ({history, courseId, moduleId, lessonId,topicId,layout,courseheader}) => (

    <Provider store={store}>
        <div>
            <div className="row wbdv-course-editor">
                <div className="col-sm-4 d-flex d-flex-rev">
                    <button onClick={() => history.push(`/${layout}`)}>
                        <i className="fa fa-2x fa-times mr-3 "></i>
                    </button>
                    <h1 className="wbdv-course-title mt-1">{courseheader} </h1>
                </div>
                {moduleId && (<LessonTabsComponent courseId={courseId}  history={history} lessonId = {lessonId} moduleId={moduleId}/>)}
            </div>
            <div className="row">
                <ModuleListComponent courseId={courseId}  moduleId ={moduleId} lessonId={lessonId} history={history}/>

                <div className="col-12 col-sm-7">
                    <div className="tab-content">
                        <div
                            className="tab-pane active"
                            id="v-tab-lesson1"
                            role="tabpanel"
                            aria-labelledby="home-tab" >
                            {lessonId  && <TopicPillsComponent courseId={courseId}
                                                               history ={history}
                                                               lessonId ={lessonId}
                                                               moduleId={moduleId}
                                                               topicId ={topicId}
                            />}

                             <WidgetListComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Provider>
);

export default CourseEditorComponent

