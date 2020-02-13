import {CREATE_MODULE, DELETE_MODULE, FIND_MODULES_FOR_COURSE, UPDATE_MODULE} from "../actions/moduleActions";

const initialState = {
    modules: []
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_MODULES_FOR_COURSE:
            return {
                modules: action.modules
            }
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(module => module._id === action.moduleId ? action.updatedModule : module)

            }

        case 'FIND_MODULES':
            return {
                modules: action.modules
            }
        case DELETE_MODULE:
            return {
                modules:
                    state.modules.filter(module => module._id != action.moduleId)

            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }

        default:
            return state
    }
}

export default moduleReducer