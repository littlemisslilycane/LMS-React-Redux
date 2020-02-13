import React from "react";
import {connect} from "react-redux";
import ModuleListItemComponent from "./ModuleListItemComponent";
import {createModule, findModulesForCourse, updateModule} from "../../actions/moduleActions";
import {createModule as createModuleService,
findModulesForCourse as findModuleService,
updateModule as updateModuleService} from "../../services/ModuleService";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }
    componentDidUpdate() {
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
                            editing={this.state.editingModuleId === module._id &&   this.state.editingModuleId === this.state.activeModuleId}
                            currentModuleTitle={this.state.currentModuleTitle}
                            edit={() => {
                                this.setState({
                                    activeModuleId: module._id
                                })
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
                                this.props.history.push(`/course-editor/${this.props.courseId}/module/${ module._id}`)
                                this.setState({
                                    activeModuleId: module._id,

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
            createModuleService(courseId)
                .then(actualModule =>
                    dispatch(
                        createModule(actualModule)
                    ))
        },
        findModuleForCourse: (courseId) => {

            findModuleService(courseId)
                .then(actualModules => dispatch(
                    findModulesForCourse(actualModules)
                ))
        },
        saveModule: (newModuleTitle, editingModuleId) => {

            updateModuleService(editingModuleId,newModuleTitle).then(
                dispatch(updateModule({title:newModuleTitle}, editingModuleId))
            )
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(ModuleListComponent)