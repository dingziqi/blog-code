import React from 'react'
import style from './index.scss'
import Inner from './Inner'

import { connect } from 'react-redux'
import { dispatchA } from '../../actions/home'

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
        this.props.dispatch(dispatchA()).then(() => {
            console.log('done')
        })
    }

    getChildContext(){
        return {
            value: 'context'
        }
    }

    render(){
        this.click()
        let arr = 'bobwobwovbewovqdwqjnocqwowqow'.split('');
        return(
            <div className="wrapper">
                <div>test</div>
                <div className="main">
                    <ul className="list">
                        {
                            arr.map((item, index) => {
                                return (
                                    <li>
                                        {item}
                                        <p>{index}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>test</div>
            </div>
        )
    }
}

export default connect((state) => {
    console.log('selector')
    return state
})(Home)


Home.childContextTypes = {
    value: React.PropTypes.string
}
