import conf from '../conf.js';
import { GET } from '../utils/request.js';

function receiveArtical(list){
    return {
        type: 'RECEIVE_ARTICAL_LIST',
        list
    }
}

export function fetchCategory(){
    return dispatch => {
        return GET(`${conf.host}/category`).then(resp => {
            dispatch(receiveArtical(resp));
        })
    }
}
