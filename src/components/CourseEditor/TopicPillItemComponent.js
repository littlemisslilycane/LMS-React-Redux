    import React from 'react'
import {deleteTopic as deleteTopicService} from "../../services/TopicService"
import {connect} from 'react-redux'
import {deleteTopic as deleteTopicAction} from "../../actions/topicActions";

const TopicPillItemComponent = ({deleteTopic,topic,onChangeEdit,edit,editing,currentTopicTitle,save,active,select}) =>

       <li key={topic._id} className={`nav-item wbdv-topic-pill  ${active ? 'active':''}` } onClick={select}>
           <a href="#" className={`nav-link `}>{!editing &&<span> {topic.title}</span>}
           {editing && <input type="text" value ={currentTopicTitle} onChange={onChangeEdit}/>  }
           {!editing && <span><a href="#" onClick={edit} className="btn fa fa-pencil col-3"></a></span>}
           {editing && <a href="#" onClick={save}  className="btn fa fa-save"></a> }
           {editing && <span><a href="#" onClick={()=>deleteTopic(topic._id)} className="btn fa fa-trash col-3"></a></span>}
               </a>
       </li>


const stateToPropertyMapper = (state) => {
    {
    }
}


const dispatchToPropertyMapper = (dispatch) => {
    return {
        deleteTopic: (topicId) => {
            deleteTopicService(topicId)
                .then(actualTopic => dispatch(
                    deleteTopicAction(topicId)
                ))
        }
    }
}

export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(TopicPillItemComponent)

