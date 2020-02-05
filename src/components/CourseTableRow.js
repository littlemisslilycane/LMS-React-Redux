import React from "react";
import { updateCourse } from "../services/CourseService";
import './CourseTableRow.css'

class CourseTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
    course: this.props.course
  };

  render() {
    return (
      <div className="row wbdv-row wbdv-course mt-4 ml-1 border-bottom">
        <div className="col-sm-6 text-truncate ">
          <i class="fa fa-file pr-2"></i>
          {!this.state.editing && (
            <a href="#" onClick={this.props.showCourseEditor}>
              {this.state.course.title}
            </a>
          )}
          {this.state.editing && (
            <input
              onChange={e =>
                this.setState({
                  course: {
                    ...this.state.course,
                    title: e.target.value
                  }
                })
              }
              value={this.state.course.title}
            />
          )}
        </div>
        <div className="col-sm-2">me</div>
        <div className="col-sm-2">6.45 PM</div>
        <div className="col-sm-2">
        <div className="row">
          <div className="col-4"><i
            className="fa fa-2x fa-trash"
            onClick={() => this.props.deleteCourse(this.props.course)}
          ></i></div>
          <div className="col-4"><i
            className="fa fa-2x fa-pencil"
            onClick={() => this.setState({ editing: true })}
          ></i></div>
          <div className="col-4"><i
            className="fa fa-2x fa-check"
            onClick={e => {
              updateCourse(this.state.course._id, this.state.course).then(
                status => {}
              );
              this.setState({
                editing: false
              });
            }}
          ></i></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseTableRow;
