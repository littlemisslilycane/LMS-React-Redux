import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent.js";
import CourseTableContainer from "./CourseTableContainer";
import CourseGridContainer from "./CourseGridContainer";
import CourseEditorContainer from "./CourseEditorContainer.js";
import "./CourseManagerContainer-style.css";
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
    <div>
        {    this.state.editingCourse
                        && <CourseEditorContainer hideCourseEditor={this.hideCourseEditor}/>
                    }
       {!this.state.editingCourse && <div className="wbdv-coursemanager">
         <CourseManagerHeadingComponent updateForm = {this.updateForm}
          addCourse = {this.addCourse}
          newCourseTitle = {this.state.newCourseTitle}/>
        {!this.state.editingCourse && (
             <div className="wbdv-toggled">
            {this.state.layout === "table" && (
              <CourseTableContainer
                showCourseEditor={this.showCourseEditor}
                deleteCourse={this.deleteCourse}
                courses={this.state.courses}
                toggle = {this.toggle} />
            )}
            {this.state.layout === "grid" && (
              <CourseGridContainer courses={this.state.courses}
              deleteCourse={this.deleteCourse}
              showCourseEditor={this.showCourseEditor}
                              courses={this.state.courses}
                              toggle = {this.toggle}
               toggle = {this.toggle} />
            )}
	   </div>
        )}
      </div>
      }
      </div>
    );
  }
}

export default CourseManagerComponent;
