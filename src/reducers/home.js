const initialState = {
    list: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_ARTICAL_LIST':
            return {
                ...state,
                list: action.list
            }
        default:
            return state
    }
}
