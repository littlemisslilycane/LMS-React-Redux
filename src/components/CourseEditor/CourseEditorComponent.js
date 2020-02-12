import React from "react";

import "./CourseEditorComponent-style.css";
import ModuleListComponent from "./ModuleListComponent.js";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from  "../../reducers/lessonReducer";
import LessonTabsComponent from "./LessonTabsComponent.js";
import TopicPillsComponent from "./TopicPillsComponent.js";
import {combineReducers, createStore} from "redux";
import WidgetListComponent from "./WidgetListComponent.js";
import {Link} from "react-router-dom";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons:lessonReducer

})

const store = createStore(rootReducer)
const CourseEditorComponent = ({history, courseId, moduleId, lessonId}) => (


    <Provider store={store}>
        <div>
            <div className="row wbdv-course-editor">
                <div className="col-sm-4 d-flex d-flex-rev">
                    <button onClick={() => history.goBack()}>
                        <i className="fa fa-2x fa-times mr-3 "></i>
                    </button>
                    <h1 className="wbdv-course-title mt-1">CS5610 - WebDev</h1>
                </div>
                {moduleId && (<LessonTabsComponent lessonId = {lessonId} moduleId={moduleId}/>)}
            </div>
            <div className="row">
                <ModuleListComponent courseId={courseId} history={history}/>

                <div className="col-12 col-sm-7">
                    <div className="tab-content">
                        <div
                            className="tab-pane active"
                            id="v-tab-lesson1"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            {moduleId && lessonId && <TopicPillsComponent/>
                            &&
                            <WidgetListComponent/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Provider>
);

export default CourseEditorComponent;
