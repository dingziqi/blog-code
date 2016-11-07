const initialState = {
    test: 'tset'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'A':
            return Object.assign({}, state, {
                test: 'A'
            })
            break
        case 'B':
            return Object.assign({}, state, {
                test: 'B'
            })
        default:
            return state
    }
}
