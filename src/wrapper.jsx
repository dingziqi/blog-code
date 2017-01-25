import React from 'react';
import Footer from './components/Footer/index';
import Header from './components/Header/index';

export default(Component) => class extends React.Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return <div>
            <Header />
            <Component {...this.props}/>
            <Footer />
        </div>
    }
}
