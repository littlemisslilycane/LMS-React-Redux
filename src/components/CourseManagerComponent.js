import React from 'react';


const CourseManagerComponent = () =>
<div>
<h1>Course Manager</h1>
<button>Toggle</button>
{true && <CourseTableComponent />}
{false && <CourseGridComponent />}
</div>


export default CourseManagerComponent


