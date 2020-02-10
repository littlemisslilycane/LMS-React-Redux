import CourseManagerHeadingComponent from "./CourseManagerHeadingComponent";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";


const CourseListComponent = ({updateForm,
                             addCourse,
                             newCourseTitle,
                             deleteCourse,
                             courses,
                             toggle,
                             layout}) =>
    <div className="wbdv-coursemanager">

        <CourseManagerHeadingComponent
            updateForm={updateForm}
            addCourse={addCourse}
            newCourseTitle={newCourseTitle}
        />

            <div className="wbdv-toggled">


                    <Route path = {`/(|table)`}
                           render = {() =>
                    <CourseTableComponent
                        deleteCourse={deleteCourse}
                        courses={courses}
                        toggle={toggle}
                    /> }
                />


                    <Route path ={`/grid`}

                           render={() =>

                               <CourseGridComponent
                                   courses={courses}
                                   deleteCourse={deleteCourse}
                                   courses={courses}
                                   toggle={toggle}

                               />
                           }/>


            </div>

    </div>

export  default  CourseListComponent