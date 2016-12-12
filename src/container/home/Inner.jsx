import React from 'react';
import Footer from '../../components/footer/index'

export default class Inner extends React.Component {
    render(){
        return (
            <div>
                <Footer></Footer>
            </div>
        )
    }
}

Inner.contextTypes={
    value: React.PropTypes.string
}
