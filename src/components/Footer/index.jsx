import React, { Component } from 'react';
import Style from './style.scss';

export default class Footer extends Component{
    render(){
        return(
            <div id="Footer">
                <p>&copy; 2016 www.dingziqi.com</p>
                <p>Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.</p>
            </div>
        )
    }
}
