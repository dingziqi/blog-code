import React, { Component } from 'react';
import Style from './style.scss';
// import hljs from 'highlight.js';
import hlStyle from '../../../node_modules//highlight.js/styles/atom-one-dark.css';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

var hljs = require('highlight.js'); // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});



export default class Artical extends Component{

    constructor(...args){
        super(...args);
        this.state = {
            loading: true
        }
    }

    componentWillMount(){
        var path = 'dist/md/' + this.props.params.path + '.md';
        fetch(path)
            .then(resp => {return resp.text()})
            .then(text => {
                this.setState({loading: false})
                this.refs.artical.innerHTML = md.render(text.split('---')[1].replace('<!--more-->', ''));
                this.refs.artical.querySelectorAll('pre').forEach(code => {
                    hljs.highlightBlock(code);
                })
            })

    }

    render(){
        return (
            <div>
                <Header />
                <div className="artical" ref="artical">

                </div>
                <Footer />
            </div>
        )
    }
}
