import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/article';

import Style from './style.scss';
import hlStyle from '../../../node_modules/highlight.js/styles/atom-one-dark.css';
import LazyLoad from '../../utils/LazyLoad.js';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

class Article extends Component{
    constructor(...args){
        super(...args);
        this.state = {
            loading: true
        }
    }

    componentWillMount(){
        let id = decodeURIComponent(this.props.params.path);
        this.props.actions.fetchArticle(id).then(resp => this.setState({loading: false}));
    }

    componentDidUpdate(){
        if(!this.state.loading){
            global.DUOSHUO && DUOSHUO.EmbedThread(document.getElementById('comments'));

            this.refs.article.querySelectorAll('pre').forEach(code => {
                hljs.highlightBlock(code);
            });

            LazyLoad();
        }
    }

    render(){
        const { location, article } = this.props;
        let { content, meta } = article;
        return (
            !this.state.loading ?
                <div className="container">
                    <div className="meta-wrapper">
                        <p className="article-title">{ meta.title }</p>
                        <p className="meta-info">
                            { new Date(meta.date).toLocaleDateString() }
                            { meta.tags.map((item, index) => <span className="article-tag" key={index}>{item}</span>)}
                            </p>
                    </div>
                    <div className="article" ref="article" dangerouslySetInnerHTML={{__html: content || ''}}></div>
                    <div id="comments" className="ds-thread" data-thread-key={location.pathname} data-title={location.pathname} data-url={location.pathname}></div>
                </div>
                : null
        )
    }
}

export default connect((state)=> state, dispatch => {return {actions: bindActionCreators(actions, dispatch)}})(Article);
