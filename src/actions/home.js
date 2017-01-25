// import 'whatwg-fetch';

function receive_artical(list){
    return {
        type: 'RECEIVE_ARTICAL_LIST',
        list
    }
}

export function fetchArtical(){
    return dispatch => {
        return fetch('./dist/cat.json')
        .then(resp => {
            return resp.text();
        })
        .then(data => {
            if(data instanceof Array || true){
                dispatch(receive_artical(JSON.parse(data)))
            }
        })
    }
}
