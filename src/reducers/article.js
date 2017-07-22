const initialState = {};

export default function(state = initialState, action){
    console.log(action)
    switch(action.type){
        case 'RECEVIE_ARTICLE':
            return {
                ...state,
                ...action.data
            }
            break;
        default:
            return state;
    }
}