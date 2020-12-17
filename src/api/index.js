import axios from 'axios';

const url = 'http://localhost:8080/posts';

/** method */
export const fetchPost = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);