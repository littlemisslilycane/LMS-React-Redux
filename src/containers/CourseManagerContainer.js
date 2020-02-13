import React from "react";
import CourseManagerHeadingComponent from "../components/CourseManagerHeadingComponent.js";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent.js";
import "./CourseManagerContainer-style.css";
import {
    deleteCourse,
    createCourse,
    findAllCourses
} from "../services/CourseService";
import CourseListComponent from "../components/CourseListComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CourseManagerComponent extends React.Component {
    state = {
        layout: "table",
        editingCourse: false,
        newCourseTitle: "",
        courses: [],
        CourseHeader: ""
    };

    componentDidMount = async () => {
        const allCourses = await findAllCourses();
        this.setState({
            courses: allCourses
        });
    };

    deleteCourse = async deletedCourse => {
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
        if (this.state.newCourseTitle.trim() == "") {

            return false;
        }
        const newCourse = {
            title: this.state.newCourseTitle,
            date: new Date().toLocaleString()
        };
        const actualCourse = await createCourse(newCourse);

        const allCourses = await findAllCourses();
        this.setState({
            newCourseTitle: ""
        });
        this.setState({
            courses: allCourses
        });
    };

    updateForm = e => {
        this.setState({
            newCourseTitle: e.target.value
        });
        this.setState({
            course: {
                ...this.state.course
            }
        });
    };

    selectedCourseTitle = (e) => {
        this.setState({
            CourseHeader: e
        });

    };

    render() {
        return (
            <div>
                <Router>
                    <Route path="/course-editor/:courseId"
                           exact={true}
                           render={(props) =>
                               <CourseEditorComponent layout= {this.state.layout}
                                                      lessonId={props.match.params.lessonId}
                                                      moduleId={props.match.params.moduleId}
                                                      courseId={props.match.params.courseId}
                                                      courseheader={ this.state.CourseHeader}
                                                      {...props}/>}
                    />

                    <Route
                        path="/course-editor/:courseId/module/:moduleId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                layout= {this.state.layout}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                lessonId={props.match.params.lessonId}
                                courseheader={ this.state.CourseHeader}
                            />}/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                layout= {this.state.layout}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                courseheader={ this.state.CourseHeader}
                                />
                        }/>
                    <Route
                        path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                        exact={true}
                        render={(props) =>
                            <CourseEditorComponent
                                {...props}
                                layout= {this.state.layout}
                                lessonId={props.match.params.lessonId}
                                moduleId={props.match.params.moduleId}
                                courseId={props.match.params.courseId}
                                topicId={props.match.params.topicId}
                                courseheader={ this.state.CourseHeader}
                            />
                        }/>


                    <Route path="/(|table|grid)"
                           exact={true}
                           render={(props) => <CourseListComponent
                               updateForm={this.updateForm}
                               addCourse={this.addCourse}
                               newCourseTitle={this.state.newCourseTitle}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}
                               toggle={this.toggle}
                               layout={this.state.layout}
                               selectedCourseTitle = {this.selectedCourseTitle}
                           />}/>

                </Router>
            </div>
        );
    }
}

export default CourseManagerComponent;
