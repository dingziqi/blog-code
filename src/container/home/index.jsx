import React from 'react'
import style from './index.scss'
import Inner from './Inner'
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/home'

import html from '../../md/test.md';
import hljs from 'highlight.js';
import hlStyle from '../../../node_modules//highlight.js/styles/atom-one-dark.css';

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
    componentDidMount(){
        var code = document.querySelector('pre');
        hljs.highlightBlock(code);
        console.log(hljs)
        console.log(code)
    }

    getChildContext(){
        return {
            value: 'context'
        }
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="artical" dangerouslySetInnerHTML={{__html: html}}>
                </div>
                <Footer></Footer>
            </div>
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
