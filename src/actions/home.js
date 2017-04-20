// import 'whatwg-fetch';
import conf from '../conf.js';

function receive_artical(list){
    return {
        type: 'RECEIVE_ARTICAL_LIST',
        list
    }
}

export function fetchCategory(){
    return dispatch => {
        return fetch(`${conf.host}/category`)
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

export function fetchArticle(id){
    return dispatch => {
        return fetch(`${conf.host}/article/${id}`)
        .then(resp => {
            return resp.text();
        })
    }
}
