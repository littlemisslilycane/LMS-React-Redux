import React from "react";
import CourseTableRowComponent from "../components/CourseTableRowComponent";
import {Link} from "react-router-dom";

const CourseTableComponent = ({courses, deleteCourse, showCourseEditor,toggle})=>
    <div className = "bg-light border-bottom">
     <div className="row wbdv-row  font-weight-bold border-bottom  p-3 ">
             <div className="col-sm-6 col-9">
               Title
             </div>
             <div className="col-sm-2 d-none d-md-block ">Owned By</div>
             <div className="col-sm-2 d-none d-md-block ">Last Modified By</div>
             <div className="col-sm-2 col-3">
                 <Link to={`/grid`}>    <i className="fa fa-th pr-5 wbdv-button
             wbdv-grid-layout"></i></Link>

             </div>
           </div>
            {
                courses.map(function(course, index) {
                    return <CourseTableRowComponent
                        showCourseEditor={showCourseEditor}
                        deleteCourse={deleteCourse}
                        key={course._id}
                        course={course}/>
                })
            }
    </div>
export default CourseTableComponent