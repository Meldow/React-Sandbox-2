import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // we cannot simply call fetchPosts, as it needs to go through the usual action pipeline!
    // when we call an action creator, inside an action creator, we need to make sure to dispatch the result of calling an action creator
    await dispatch(fetchPosts());

    // we use getState to get the updated store from the previous request `getState().posts`
    //_.map(getState().posts, 'userId') looks through all posts and only removes `userId` property
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    // note that we do not need to wait for this dispatch since we do not need the result of this operation!
    userIds.forEach(id => dispatch(fetchUser(id)));

    //using lodash chain
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value(); // executes all operations, else does nothing!
}

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response.data})
}

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
}

// Memoized version
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type: 'FETCH_USER', payload: response.data});
// });