import {types} from "../../../config/types";

const initialState = []

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return action.payload
        default:
            return state
    }
}

export default postsReducer