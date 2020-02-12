import {API_URL} from "../common/constants";


export const createModuleForCourse = (courseId,module) =>
{
    fetch(`${API_URL}/courses/${courseId}/modules `, {
        method: 'POST',
        body: JSON.stringify(module),
        headers: {
            'content-type' :'application/json'
        }
    }).then(response=>response.json())

}








