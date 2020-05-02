export default (state = [], action) => {
    return action.type === 'FETCH_POSTS'
        ? action.payload
        : state; // we must NEVER return undefined
}