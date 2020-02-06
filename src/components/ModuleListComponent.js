import React from "react";

const ModuleListComponent = ({}) =>


               <div className="col-12 col-sm-4 wbdv-module-list">

                   <ul className="list-group wbdv-module-list">
                       <li className="wbdv-module-item list-group-item"><a href="#" className="wbdv-module-item-title"> Module 1 - jQuery</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                       <li className="wbdv-module-item list-group-item wbdv-active"><a href="#" className="wbdv-module-item-title">Module 2 - React</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                       <li className="wbdv-module-item list-group-item"><a href="#" className="wbdv-module-item-title">Module 3 - Redux</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                       <li className="wbdv-module-item list-group-item"><a href="#" className="wbdv-module-item-title"> Module 4 - Native</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                       <li className="wbdv-module-item list-group-item"><a href="#" className="wbdv-module-item-title">Module 5 - Angular</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                       <li className="wbdv-module-item list-group-item"><a href="#" className="wbdv-module-item-title">Module 6 - Node</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                       <li className="wbdv-module-item list-group-item"><a href="#" className="wbdv-module-item-title">Module 7 - Mongo</a>
                           <a href="#" className="btn close wbdv-module-item-delete-btn" aria-label="Close">
                               <span aria-hidden="true">&times;</span></a>
                       </li>
                   </ul>

                   <div className="row d-flex flex-row-reverse ">
                       <a href="#" className="nav-link btn d-flex-rev wbdv-module-item-add-btn"> <i className="fa fa-2x fa-plus"></i></a>
                   </div>
               </div>

export default ModuleListComponent