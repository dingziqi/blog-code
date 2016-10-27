import React from 'react'

export default class Inner extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

Inner.contextTypes={
    value: React.PropTypes.string
}
