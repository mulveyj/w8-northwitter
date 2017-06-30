import React from 'react';
import './Tweet.css';

class Tweet extends React.Component {
    render () {
        return (
            <div className='tweet'>
                <div className='iconTweet col-xs-2'>
                    <img id='obie' src="https://www.whitehouse.gov/sites/whitehouse.gov/files/images/first-family/44_barack_obama%5B1%5D.jpg" alt="Obama"/>
                </div>
                <div>
                    <p>{this.props.text}.</p>
                    <img id='bigObie' src={this.props.pic} alt="Obama"/>
                    <span id='heart' className='glyphicon glyphicon-heart-empty'></span>
                    <span id='retweet' className='glyphicon glyphicon-retweet'></span>
                    <span id='comment' className='glyphicon glyphicon-comment'></span>
                    <span id='envelope' className='glyphicon glyphicon-envelope'></span>
                </div>

            </div>
        );
    }
}
export default Tweet;
