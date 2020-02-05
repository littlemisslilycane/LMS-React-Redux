import React from "react";

const CourseManagerHeading = ({updateForm,addCourse,newCourseTitle}) =>
    <div className="navbar navbar-light bg-primary   justify-start">

                  <div className="mx-2 my-auto d-inline w-100">

                    <div className="input-group">
                    <label className="navbar-brand d-none d-md-block text-white  font-weight-bold wbdv-label wbdv-course-manager">
                                                  Course Manager
                                                </label>
                      <input
                        onChange={updateForm}
                        type="text"
                        value={newCourseTitle}
                        className="form-control wbdv-field  wbdv-new-course"
                        placeholder="New Course Title"                  />
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

export default CourseManagerHeading;