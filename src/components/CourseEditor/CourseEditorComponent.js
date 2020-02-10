import React from "react";

import "./CourseEditorComponent-style.css";
import ModuleListComponent from "./ModuleListComponent.js";
import LessonTabsComponent from "./LessonTabsComponent.js";
import TopicPillsComponent from "./TopicPillsComponent.js";
import WidgetListComponent from "./WidgetListComponent.js";
import {Link} from "react-router-dom";
const CourseEditorComponent = ({ hideCourseEditor }) => (
  <div>
    <div className="row wbdv-course-editor">
      <div className="col-sm-4 d-flex d-flex-rev">
        <Link
          to = {`/`}
          className="btn close wbdv-course-editor wbdv-close"
          aria-label="Close">
          <i className="fa fa-2x fa-times mr-3 "></i>
        </Link>
        <h1 className="wbdv-course-title mt-1">CS5610 - WebDev</h1>
      </div>
      <LessonTabsComponent />
    </div>
    <div className="row">
      <ModuleListComponent />

      <div className="col-12 col-sm-7">
        <div className="tab-content">
          <div
            className="tab-pane active"
            id="v-tab-lesson1"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <TopicPillsComponent />

            <WidgetListComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CourseEditorComponent;
