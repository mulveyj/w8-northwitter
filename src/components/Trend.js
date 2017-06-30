import React from 'react';

class Trend extends React.Component {
    render () {
        return (
            <div className='component-Trend'>
                <a href={this.props.url}>{this.props.name}</a>
                <p>{this.props.tweet_volume}</p> 
            </div>
        );
    }
}

export default Trend;