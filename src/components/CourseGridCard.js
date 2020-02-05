import React from "react";
import { updateCourse } from "../services/CourseService";
import logo  from '../fileimage.png';


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
      <div className="card" >
      <img src={logo} className="card-img-top " alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.state.course.title}</h5>

          <div class="card-footer bg-transparent border-success ">
          <div class="col-4">{ !this.state.editing && <i
                      className="fa fa-2x fa-trash"
                      onClick={e => {e.stopPropagation(); this.props
                      .deleteCourse(this.props.course)}}></i>}
          </div>
           <div class="col-4">{ !this.state.editing &&  <i
                      className="fa fa-2x fa-pencil"
                      onClick={e => {e.stopPropagation(); this.setState({ editing: true })}}></i>
                             }</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseGridCard;
