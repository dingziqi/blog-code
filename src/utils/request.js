export function GET(url, param ={}){
    return fetch(url, param).then(resp => {
        return resp.text();
    })
    .then(resp => {
        return JSON.parse(resp);
    })
}