import React from 'react'
import style from './index.scss'
import Inner from './Inner'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/home'

function creatorA(){
    return {
        type: 'A',
        data: 'B'
    }
}

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            value: {
                foo: 'bar'
            },
            test: 1
        }
        this.click = this.click.bind(this)
    }

    click(){
        // dispatchA();
        // console.log(dispatchA())
        console.dir(this.props.actions.dispatchA())
    }

    componentWillMount(){
        let { dispatch } = this.props;
        let test = bindActionCreators(creatorA, dispatch)
        this.click()

        console.log(this.props)
    }

    getChildContext(){
        return {
            value: 'context'
        }
    }

    render(){
        return(
            <div></div>
        )
    }
}

function mapState(state){
    return state
}
function mapReducer(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapState, mapReducer)(Home)


Home.childContextTypes = {
    value: React.PropTypes.string
}
