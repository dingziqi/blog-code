import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/home';

import Style from './style.scss';
import hlStyle from '../../../node_modules/highlight.js/styles/atom-one-dark.css';
import LazyLoad from '../../utils/LazyLoad.js';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return '';
  }
});

var defaultRender = md.renderer.rules.image;
md.renderer.rules.image = function(tokens, idx, options, env, self){
    var token = tokens[idx];
    var aIndex = token.attrIndex('src');
    var realSrc = token.attrs[aIndex][1];

    return `<div style="position:relative;"><img data-src="${realSrc}" class="lazy-img hidden"/><i class="icon-img iconfont icon-tupian"></i></div>`;
}


class Article extends Component{

    constructor(...args){
        super(...args);
        this.state = {
            loading: true
        }
    }

    componentWillMount(){
        let id = decodeURIComponent(this.props.params.path);
        this.props.actions.fetchArticle(id).then(resp => {
            this.refs.article.innerHTML = resp;
            this.refs.article.querySelectorAll('pre').forEach(code => {
                hljs.highlightBlock(code);
            });

            LazyLoad();
        })
    }

    componentDidMount(){
        global.DUOSHUO && DUOSHUO.EmbedThread(document.getElementById('comments'));
    }

    render(){
        const { location } = this.props;
        return (
            <div ref="container">
                <div className="article" ref="article"></div>

            	<div id="comments" className="ds-thread" data-thread-key={location.pathname} data-title={location.pathname} data-url={location.pathname}></div>
            </div>
        )
    }
}

export default connect((state)=> state, dispatch => {return {actions: bindActionCreators(actions, dispatch)}})(Article);
