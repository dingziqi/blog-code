function actionA(){
    return {
        type: 'A',
        data: 'A'
    }
}

export function dispatchA(){
    return dispatch => {
        return new Promise(resolve => {
            resolve(dispatch(actionA()))
        })
    }
}
