
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const DELETE_MODULE ='DELETE_MODULE'
export const createModule = (module) => ({

    type: CREATE_MODULE,
    newModule: module
})

export const updateModule = (module,moduleId) => ({
    type: UPDATE_MODULE,
    updatedModule: module,
    moduleId: moduleId
})

export const findModulesForCourse = (modules) => ({

    type: FIND_MODULES_FOR_COURSE,
    modules: modules
})
export const deleteModule = (module) => ({

    type: DELETE_MODULE,
    moduleId: module
})