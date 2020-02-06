import React from "react";
import CourseGridCard from "./CourseGridCard";
import "./CourseGridComponent.css";

const CourseGridComponent = ({courses , deleteCourse, showCourseEditor, toggle})=>
    <div className="wbdv-coursegrid">
    <div className = "bg-light border-bottom">
     <div className="row wbdv-row font-weight-bold border-bottom  p-3">
             <div className="col-sm-6">
               Recent Documents
             </div>
             <div className="col-sm-2">Owned By me</div>
             <div className="col-sm-2">
             <i onClick = {toggle } className="fa fa-th pr-5 wbdv-button wbdv-grid-layout"></i>
             </div>
           </div>
    </div>
    <div className="container-fluid mt-3">
     <div className="card-deck">{
                         courses.map(function(course, index) {
                                             return(
                                             <div key={course
                                             ._id}className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-4">
                                                <CourseGridCard course={course}
                                                showCourseEditor={showCourseEditor}
                                                  deleteCourse={deleteCourse}/>
                                             </div>);
                                    })
                                }
     </div>

     </div>

    </div>
export default CourseGridComponent