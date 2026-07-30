// The whole store is a single number. `mapStateToProps` in the Counter
// component reads it directly, so there is no wrapping object.
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'ZERO':
            return action.payload
        case 'DOUBLE':
            return state * action.payload
        default:
            return state
    }
}

export default reducer;
