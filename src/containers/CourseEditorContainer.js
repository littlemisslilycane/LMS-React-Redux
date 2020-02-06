import React from "react";

import './CourseEditorContainer-style.css'
import ModuleListComponent from "../components//ModuleListComponent.js"
import LessonTabsComponent from "../components/LessonTabsComponent.js"
import TopicPillsComponent from "../components/TopicPillsComponent.js"
import WidgetListComponent from "../components/WidgetListComponent.js"
const CourseEditorContainer = ({hideCourseEditor}) =>
    <div>
           <div className="row wbdv-course-editor">
               <div className="col-sm-4 d-flex d-flex-rev">
                   <a href="#" className="btn close wbdv-course-editor wbdv-close" aria-label="Close">
                       <i className="fa fa-2x fa-times mr-3 "></i></a>
                   <h1 className="wbdv-course-title mt-1">CS5610 - WebDev</h1></div>
               <LessonTabsComponent />

           </div>
        <div className="row">
        <ModuleListComponent />

               <div className="col-12 col-sm-7">

                   <div className="tab-content">

                       <div className="tab-pane active" id="v-tab-lesson1" role="tabpanel" aria-labelledby="home-tab">

                          <TopicPillsComponent />

                           <WidgetListComponent />
                       </div>

                   </div>
               </div>
           </div>
    </div>

export default CourseEditorContainer
