import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constants/actionTypes';
import * as api from '../api';

/** Action Creators */
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPost();

        dispatch({ type: FETCH_ALL, payload: data });

    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
}

/** Create */
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}


/** Update */
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

/** Delete */
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
}


/** Like */
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}