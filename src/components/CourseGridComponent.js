import React from "react";
import CourseGridCard from "./CourseGridCard";
import "./CourseGridComponent.css";

const CourseGridComponent = ({courses , toggle})=>
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
    <div className="container mt-3">
     <div className="card-columns">{
                         courses.map(function(course, index) {
                                             return <CourseGridCard
                                                 key={course._id}
                                                 course={course}/>
                                    })
                                    }
     </div>

     </div>

    </div>
export default CourseGridComponent