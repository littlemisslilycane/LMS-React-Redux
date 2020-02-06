import React from "react";
import CourseManagerHeading from "./CourseManagerHeading";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditor from "./CourseEditor/CourseEditor.js";
import "./CourseManagerComponent.css";
import {
  deleteCourse,
  createCourse,
  findAllCourses
} from "../services/CourseService";

class CourseManagerComponent extends React.Component {
  state = {
    layout: "table",
    editingCourse: false,
    newCourseTitle: "",
    courses: []
  };

  componentDidMount = async () => {
    const allCourses = await findAllCourses();
    this.setState({
      courses: allCourses
    });
  };

  deleteCourse = async deletedCourse=> {
    const status = await deleteCourse(deletedCourse._id);
    const courses = await findAllCourses();
    this.setState({
      courses: courses
    });
  };

  toggle = () => {
    this.setState(prevState => {
      if (prevState.layout === "grid") {
        return {
          layout: "table"
        };
      } else {
        return {
          layout: "grid"
        };
      }
    });
  };

  showCourseEditor = () =>
    this.setState({
      editingCourse: true
    });

  hideCourseEditor = () =>
    this.setState({
      editingCourse: false
    });

  addCourse = async () => {
    if(this.state.newCourseTitle.trim() == ""){
    alert("Please enter the course title");
    return false;
    }
    const newCourse = {
      title: this.state.newCourseTitle,
      date: (new Date()).toLocaleString()
    };
    const actualCourse = await createCourse(newCourse);

    const allCourses = await findAllCourses();
    this.setState({
          newCourseTitle: ''

        });
    this.setState({
      courses: allCourses
    });
  };

  updateForm = (e) =>{
    this.setState({
      newCourseTitle: e.target.value

    });
    this.setState({
                      course: {
                        ...this.state.course,

                      }
                  })
    }

  render() {
    return (
      <div className="wbdv-coursemanager">
         <CourseManagerHeading updateForm = {this.updateForm}
          addCourse = {this.addCourse}
          newCourseTitle = {this.state.newCourseTitle}/>
        {!this.state.editingCourse && (
             <div className="wbdv-toggled">
            {this.state.layout === "table" && (
              <CourseTableComponent
                showCourseEditor={this.showCourseEditor}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}
                toggle = {this.toggle} />
            )}
            {this.state.layout === "grid" && (
              <CourseGridComponent courses={this.state.courses}
              deleteCourse={this.deleteCourse}
                              courses={this.state.courses}
                              toggle = {this.toggle}
               toggle = {this.toggle} />
            )}
	   </div>
        )}
      </div>
    );
  }
}

export default CourseManagerComponent;
