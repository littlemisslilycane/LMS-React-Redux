import {API_LINK, API_URL} from "../common/constants";

export const createModule = async courseId => {

    const response = await fetch(`${API_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers: {
            "content-type": "application/json"
        }
    });

    return await response.json();
};


export const findModulesForCourse =  async courseId => {
    const response = await fetch(`${API_LINK}/courses/${courseId}/modules`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    })
    return await response;

}

export const findModule =  async moduleId => {
    const response = await fetch(`${API_LINK}/modules/${moduleId}`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    })
    return await response;

}
export const updateModule = (moduleId,module) =>{
    const response = fetch(`${API_LINK}/modules/${moduleId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title: module})
    }).then(response => {return response.json()})
    return response;
}

export const deleteModule = (moduleId) => {

    const response = fetch(`${API_LINK}/modules/${moduleId}`, {
        method: 'DELETE'
    }).then(response => {
        return response.json()
    })
    return response;
}








