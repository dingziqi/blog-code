import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import * as actions from '../../actions/home';
import style from './index.scss';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';

class Home extends React.Component{
    constructor(...args){
        super(...args);
    }

    componentWillMount(){
        this.props.actions.fetchCategory().then(resp => console.log(resp));
    }

    render(){
        return(
            <section id="home-box">
                <ul>
                    { this.props.home.list
                        .sort((pre, next) => {
                            return new Date(next.date) - new Date(pre.date)
                        })
                        .map((item, index) => {
                            return (
                                <li className="artical-item" key={index}>
                                    <p className="title"><Link to={`/article/${encodeURIComponent(item.articleId)}`}>{item.title}</Link></p>
                                    <p className="info"><span>{item.date.split('T')[0]}</span></p>
                                    <div>{item.desc}</div>
                                </li>
                            )
                        })}
                </ul>
            </section>
        )
    }
}

export default connect((state)=> state, dispatch => {return {actions: bindActionCreators(actions, dispatch)}})(Home);
