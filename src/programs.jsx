import React from 'react'

export class Application extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='program'>
                <h2>{this.props.name}</h2>
                <div className='characteristics'>
                    {this.props.characteristics.map((charactSet, i) => (
                        <div key={i}>
                            <div>{charactSet.nameRu}: {charactSet.rate}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
