import React from 'react'


const CourseTableComponent = ({courses}) =>
<div>
<h1>Course Table Component { courses.length}</h1>
<ul>
<li>Course 1</li>
<li>Course 2</li>
<li>Course 3</li>
{
courses.map(function(course, index){
return <li key={index}>{course.title}</li>
})
}
</ul>
</div>


export default CourseTableComponent