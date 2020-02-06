import React from "react";
import { updateCourse } from "../services/CourseService";
import './CourseTableRow.css'

class CourseTableRowComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false,
    course: this.props.course,
    bgcolor: 'white',
    select: false,
    fontcolor: 'black'

  };

    selectToggle = () => {
    if(this.state.select){
    this.setState({
      bgcolor: 'white',
      select: false,
      fontcolor: 'black'
    });
    }
    else{
    this.setState({
          bgcolor: '#007bff',
          select: true,
          fontcolor :'white'
        });
    }
}
  render() {
    return (
      <div style = {{backgroundColor: this.state.bgcolor, color: this.state.fontcolor}}
      onClick = {this.selectToggle}
      className="row wbdv-row  wbdv-course p-3 ml-1  border-bottom">
        <div className="col-sm-6 col-9 text-truncate ">
          <i className="fa fa-file pr-2"></i>
          {!this.state.editing && (
            <a href="#" className="wbdv-coursetitle" onClick={this.props.showCourseEditor}
            style={{color:this.state.fontcolor}}>
                        {this.state.course.title}
            </a>
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
          )}
        </div>
        <div className="col-sm-2 d-none d-md-block ">me</div>
        <div className="col-sm-2 d-none d-md-block ">{this.state.course
        .date}</div>
        <div className="col-sm-2 col-3">
        <div className="row">
          <div className="col-4">{ !this.state.editing && <i
            className="fa fa-2x fa-trash"
            onClick={e => {e.stopPropagation(); this.props.deleteCourse(this.props.course)}}></i> } </div>
          <div className="col-4">{ !this.state.editing && <i
            className="fa fa-2x fa-pencil"
            onClick={e => {e.stopPropagation(); this.setState({ editing: true })}}></i>}</div>
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
          ></i>}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseTableRowComponent;
