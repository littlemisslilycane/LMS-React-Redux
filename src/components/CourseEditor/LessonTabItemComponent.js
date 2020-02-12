import React from 'react'
import {connect} from 'react-redux'

const LessonTabItemComponent = ({}) =>

    <li className="nav-item pr-3 wbdv-page-tab">
        <a className="nav-link" data-toggle="tab" role="tab"
           href="#">Lesson 1</a>
    </li>



const stateToPropertyMapper = (state) => {{}}


const dispatchToPropertyMapper = (dispatch) => {
    return {

        }
        }

export default connect(stateToPropertyMapper,dispatchToPropertyMapper)(LessonTabItemComponent)

