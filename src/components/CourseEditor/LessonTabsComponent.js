import React from "react";

const LessonTabsComponent = ({}) =>
<div className="col-sm-8 mt-3">
                   <ul className="nav nav-tabs border-0">
                       <li className="nav-item pr-4">
                           <a className="nav-link active " data-toggle="tab" href="#v-tab-lesson1" role="tab" aria-controls="home" aria-selected="true" href="#">Lesson 1</a>
                       </li>

                       <li className="nav-item pr-3 wbdv-page-tab">
                           <a className="nav-link " href="#">Lesson 2</a>
                       </li>

                       <li className="nav-item pr-3 wbdv-page-tab">
                           <a className="nav-link " href="#">Lesson 3</a>
                       </li>

                       <li className="nav-item pr-3 wbdv-page-tab">
                           <a className="nav-link " href="#">Lesson 4</a>
                       </li>

                       <li className="nav-item pr-3 wbdv-page-tab">
                           <a className="nav-link " href="#">Lesson 5</a>
                       </li>

                       <li className="nav-item pr-3 wbdv-page-tab">
                           <a className="nav-link " href="#">Lesson 6</a>
                       </li>
                       <li className="nav-item pr-3">
                           <a className="nav-link btn wbdv-new-page-btn " href="#"><i className="fa fa-plus"></i></a>
                       </li>
                   </ul>
               </div>


export default LessonTabsComponent