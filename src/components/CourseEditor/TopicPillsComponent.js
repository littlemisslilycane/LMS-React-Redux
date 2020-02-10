import React from "react";

const TopicPillsComponent = ({}) =>
     <ul className="nav nav-pills wbdv-topic-pill-list mt-3">
                                   <li className="nav-item wbdv-topic-pill"><a href="#" className="nav-link active" data-toggle="pill" href="#v-pills-topic1" aria-selected="true">Topic 1</a></li>
                                   <li className="nav-item wbdv-topic-pill"><a href="#" className="nav-link">Topic 2</a></li>
                                   <li className="nav-item wbdv-topic-pill"><a href="#" className="nav-link">Topic 3</a></li>
                                   <li className="nav-item wbdv-topic-pill">
                                       <a href="#" className="nav-link btn wbdv-topic-add-btn"> <i className="fa fa-plus"></i></a>
                                   </li>
                               </ul>
export default TopicPillsComponent