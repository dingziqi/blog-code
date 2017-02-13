import React, { Component } from 'react';
import Style from './style.scss';

export default class Header extends Component{
    constructor(...args){
        super(...args);

        this.clickSearch = this.clickSearch.bind(this);
    }
    render(){
        return (
            <div className="Header">
                <div className="title">
                    临时工
                    <div className="search-box">
                        <input type="text" placeholder="站内搜索" ref="searchInput"/>
                        <i className="iconfont icon-search" onClick={this.clickSearch}></i>
                    </div>
                </div>
            </div>
        )
    }

    clickSearch(e){
        const value = this.refs.searchInput.value;
        window.open(`https://www.baidu.com/s?wd=site%3Adingziqi.com%20${value}`);
    }
}
