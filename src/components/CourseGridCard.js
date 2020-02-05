import React from "react";
import { updateCourse } from "../services/CourseService";

class CourseGridCard extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
    course: this.props.course
  };

  render() {
    return (
      <div className="card">cards</div>
    );
  }
}

export default CourseTableRow;
