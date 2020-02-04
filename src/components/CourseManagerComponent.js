import React from 'react';
import CourseGridComponent from './CourseGridComponent.js';
import CourseTableComponent from './CourseTableComponent.js';


class CourseManagerComponent extends React.Component{
state = {
layout: 'grid'
}

toggle = () => this.setState(prevState => {
if(prevState.layout === 'table'){
return ({layout:'grid'})
}
else{
return({layout:'table'})
}
})
render(){
return(
<div>
<h1>Course Manager</h1>
<button onClick = {this.toggle}>Toggle</button>
{this.state.layout ==='table' && <CourseTableComponent />}
{this.state.layout === 'grid' && <CourseGridComponent />}
</div>
)
}
}
export default CourseManagerComponent


