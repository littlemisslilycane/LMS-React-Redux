import React from "react";

const CourseManagerHeadingComponent = ({updateForm,addCourse,newCourseTitle}) =>
    <div className="navbar navbar-light bg-primary   justify-start">

                  <div className="mx-2 my-auto d-inline w-100">

                    <div className="input-group">
                    <button className="navbar-toggler wbdv-field wbdv-hamburger "
                    type="button" data-toggle="collapse" data-target="#"
                    aria-expanded="false" aria-label="Toggle navigation"><i
                    className   ="fa fa-bars fa-1x"></i></button>
                    <label className="navbar-brand d-none d-md-block text-white  ml-2 font-weight-bold wbdv-label wbdv-course-manager">
                                                  Course Manager
                                                </label>
                      <input
                        onChange={updateForm}
                        type="text"
                        value={newCourseTitle}
                        className="form-control wbdv-field  wbdv-new-course"
                        placeholder="New Course Title"  />
                      <span className="input-group-append">
                        <button
                          onClick={addCourse}
                          className="btn form-control btn-danger wbdv-button wbdv-add-course"
                          type="button">
                          +
                        </button>
                      </span>
                    </div>
                  </div>
                </div>

export default CourseManagerHeadingComponent;