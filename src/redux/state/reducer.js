import {
    USER,
} from '../state/types'


const initialState = {
    User: null,
}





const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER:
            return {
                ...state,
                User: action.payload,
            }

        default: return state
    }
}

export default reducer