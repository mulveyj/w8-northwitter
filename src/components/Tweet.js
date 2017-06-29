import React from 'react';
import './Tweet.css';

class Tweet extends React.Component {
    render () {
        return (
            <div className='tweet'>
                <p>I love everybody and everybody loves me.</p>
                <span className='glyphicon glyphicon-heart-empty'></span>
                <span className='glyphicon glyphicon-retweet'></span>
                <span className='glyphicon glyphicon-comment'></span>
                <span className='glyphicon glyphicon-envelope'></span>
            </div>
        );
    }
}
export default Tweet;