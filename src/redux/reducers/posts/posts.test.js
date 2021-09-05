import {types} from "../../../config/types";
import postsReducer from "./posts.reducer";

describe("POSTS REDUCER", () => {

    test("Should return default State", () => {
        const newState = postsReducer(undefined, {})
        expect(newState).toEqual([])
    })

    test("Should return new State if receiving", () => {
        const posts = [{title: "test 1"}, {title: "test 2"}, {title: "test 3"}]
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        })
        expect(newState).toEqual(posts)
    })
})