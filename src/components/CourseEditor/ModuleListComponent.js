import React from "react";
import {connect} from "react-redux";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {createModule, updateModule} from "../../actions/moduleActions";
import {saveModule} from "../../services/ModuleService";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)

    }


    state = {
        editingModuleId: '',
        currentModuleTitle: '',
        activeModuleId: this.props.moduleId,
    }

    render() {
        return (
            <div className="col-12 col-sm-4 wbdv-module-list">
                <ul className="list-group wbdv-module-list">
                    {this.props.modules && this.props.modules.map(module =>
                        <ModuleListItemComponent
                            key={module._id}
                            module={module}
                            editing={this.state.editingModuleId === module._id}
                            currentModuleTitle={this.state.currentModuleTitle}
                            edit={() => {
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${module._id}`)
                                const moduleId = module._id

                                this.setState({
                                    editingModuleId: module._id,
                                    currentModuleTitle: module.title
                                })
                            }}
                            onChangeEdit={e =>
                                this.setState({
                                    currentModuleTitle: e.target.value
                                })
                            }
                            save={() => {
                                this.props.saveModule(this.state.currentModuleTitle, this.state.editingModuleId)
                                this.setState({
                                    currentModuleTitle: '',
                                    editingModuleId: ''
                                })

                            }}
                            active={module._id === this.state.activeModuleId}
                            select={() => {
                                const moduleId = module._id
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`)
                                this.setState({
                                    activeModuleId: module._id
                                })
                            }}

                        />
                    )
                    }
                </ul>
                <div className="row d-flex flex-row-reverse ">
                    <a href="#" className="nav-link btn d-flex-rev wbdv-module-item-add-btn" onClick={
                        () => this.props.createModule(this.props.courseId)
                    }> <i
                        className="fa fa-2x fa-plus"></i></a>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: (courseId) => {
            fetch(`https://wbdv-generic-server.herokuapp.com/api/001387987/courses/${courseId}/modules`, {
                method: "POST",
                body: JSON.stringify({title: "New Module"}),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
                .then(actualModule =>
                    dispatch(
                        createModule(actualModule)
                    ))
        },
        findModuleForCourse: (courseId) => {

            fetch(`https://wbdv-generic-server.herokuapp.com/api/001387987/courses/${courseId}/modules`, {
                method: 'GET'
            }).then(response => response.json())
                .then(actualModules => dispatch({
                    type: 'FIND_MODULES_FOR_COURSE',
                    modules: actualModules
                }))
        },
        saveModule: (newCourseTitle, editingModuleId) => {
            let module = {
                title: newCourseTitle
            }
            fetch(`https://wbdv-generic-server.herokuapp.com/api/001387987/modules/${editingModuleId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(module)
            }).then(response => response.json()).then(
                dispatch(updateModule(module, editingModuleId))
            )
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListComponent)