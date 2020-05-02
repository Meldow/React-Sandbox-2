export default (state = [], action) => {
    return action.type === 'FETCH_USER'
        ? [...state, action.payload]    // add new data to existing state!
        : state; // we must NEVER return undefined
}