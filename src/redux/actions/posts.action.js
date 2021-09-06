import axios from "axios"
import {types} from "../../config/types";
import {urls} from "../../config/urls"

export const setPosts = (posts = []) => ({type: types.GET_POSTS, payload: posts})


export const fetchPosts = () => async dispatch => {
    axios.get(urls.GET_POSTS)
        .then(response => dispatch(setPosts(response.data)))
        .catch(error => Promise.reject(error))
}