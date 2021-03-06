import React, {useState} from 'react'
import {connect} from 'react-redux'
import {deleteModule} from "../../actions/moduleActions";
import {deleteModule as deleteModuleService} from "../../services/ModuleService";
const ModuleListItemComponent = ({module,deleteModule,editing,edit,currentModuleTitle,onChangeEdit,save,active, select}) =>



<li key={module._id} className={`wbdv-module-item list-group-item  ${active ? 'active':''}`} onClick={select}>
{!editing && <a href="#" className="wbdv-module-item-title">{module.title}</a>}
{editing && <input type="text" onChange= {onChangeEdit} value ={currentModuleTitle}/> }
{editing && <a href="#" onClick={save}  className="btn fa fa-save"></a> }
<a href="#" onClick = {() => deleteModule(module._id)}className="btn close wbdv-module-item-delete-btn" aria-label="Close"><span aria-hidden="true">&times;</span></a>
<a href="#" onClick ={edit} className="btn fa fa-pencil"></a>
</li>




const stateToPropertyMapper = (state) => {{}}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteModule: (moduleId,editingmodule) => {
         deleteModuleService(moduleId)
                         .then(actualModules => dispatch(deleteModule(moduleId)))
        }
        }
        }

export default connect(stateToPropertyMapper,dispatchToPropertyMapper)(ModuleListItemComponent)

