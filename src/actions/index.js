import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/spaces/${process.env.REACT_APP_API_SPACE_ID}/entries?access_token=${process.env.REACT_APP_API_TOKEN}&content_type=post`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}
