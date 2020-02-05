import React from "react";


const CourseGridComponent = ({courses , toggle})=>
    <div className="wbdv-coursegrid">
    <div className = "bg-light border-bottom">
     <div className="row wbdv-row wbdv-course font-weight-bold border-bottom mt-4">
             <div className="col-sm-6">
               Recent Documents
             </div>
             <div className="col-sm-2">Owned By me</div>
             <div className="col-sm-2">
             <i onClick = {toggle } className="fa fa-th pr-5 wbdv-button wbdv-grid-layout"></i>
             </div>
           </div>
    </div>

    </div>
export default CourseGridComponent