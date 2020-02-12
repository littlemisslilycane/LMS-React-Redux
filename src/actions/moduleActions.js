export const CREATE_MODULE = "CREATE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"

export const createModule = (module) => ({

    type: CREATE_MODULE,
    newModule: module
})

export const updateModule = (module,moduleId) => ({
    type: UPDATE_MODULE,
    updatedModule: module,
    moduleId: moduleId
})