import React from "react";
import { updateCourse } from "../services/CourseService";
import logo  from '../fileimage.png';
import {Link} from "react-router-dom";


class CourseCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
    course: this.props.course
  };

  render() {
    return (

      <div className="card pr-2" >
      <img src={logo} className="card-img-top " alt="..." />
        <div className="card-body text-truncate">
          <h5 className="card-title">{!this.state.editing && (
              <Link  className="wbdv-coursetitle"
                    to={`/course-editor/${this.state.course._id}`}>
                  {this.state.course.title}
              </Link>
                                               )}
                                               {this.state.editing && (
                                                 <input
                                                   onChange={e =>
                                                     this.setState({
                                                       course: {
                                                         ...this.state.course,
                                                         title: e.target.value,
                                                         date: (new Date()).toLocaleString()
                                                       }
                                                     })
                                                   }
                                                   value={this.state.course.title}
                                                 />
                                               )}</h5>

          <div className="card-footer bg-transparent border-success ">
          <div className="card-text">{ this.props.course.date }</div>
          <div className="row">
          <div className="col-4">{ !this.state.editing && <i className="fa
          fa-2x fa-trash"
                      onClick={e => {e.stopPropagation(); this.props.deleteCourse(this.props.course)}}></i>}
          </div>
           <div className="col-4">{ !this.state.editing &&  <i
                      className="fa fa-2x fa-pencil"
                      onClick={e => {e.stopPropagation(); this.setState({ editing: true })}}></i>
                             }</div>
          </div>
          <div className="col-4">{ this.state.editing &&<i
                                         className="fa fa-2x fa-check"
                                         onClick={e => { e.stopPropagation();
                                           updateCourse(this.state.course._id, this.state.course).then(
                                             status => {}
                                           );
                                           this.setState({
                                             editing: false
                                           });
                                         }}
                                       ></i>}
                    </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseCardComponent;
