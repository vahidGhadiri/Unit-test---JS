import moxios from "moxios"
import {fetchPosts} from "../redux/actions/posts.action";
import {testStore} from "../utils/functions/helper";


describe("FETCH_POSTS ACTION", () => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test("Store is updated correctly", () => {
        const expectedState = [{
            title: "TEST TITLE 1",
            body: "TEST BODY 1",
        }, {
            title: "TEST TITLE 2",
            body: "TEST BODY 2",
        }, {
            title: "TEST TITLE 3",
            body: "TEST BODY 3",
        }]
        const store = testStore()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState()
                // expect(newState.posts).toEqual(expectedState)
            })
    })
})