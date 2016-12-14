import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/home';
import style from './index.scss';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

class Home extends React.Component{
    constructor(...args){
        super(...args);
    }

    componentWillMount(){
        this.props.actions.fetchArtical()
    }

    render(){
        return(
            <div>
                <Header></Header>
                <ul>
                    { this.props.home.list.map(item => {
                        return (
                            <li className="artical-item">
                                <p className="title">{item.title}</p>
                                <div>{item.pre}</div>
                            </li>
                        )
                    })}
                </ul>
                <Footer></Footer>
            </div>
        )
    }
}

export default connect((state)=> state, dispatch => {return {actions: bindActionCreators(actions, dispatch)}})(Home);
