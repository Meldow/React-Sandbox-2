import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
    dispatch({type: 'FETCH_POSTS', payload: await jsonPlaceholder.get('/posts')})
}