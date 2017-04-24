import conf from '../conf.js';
import { GET } from '../utils/request.js';

function recevieArticle(data){
    return {
        type: 'RECEVIE_ARTICLE',
        data
    }
}

export function fetchArticle(id){
    return dispatch => {
        return GET(`${conf.host}/article/${id}`)
        .then(resp => {
            return dispatch(recevieArticle(resp))
        })
    }
}