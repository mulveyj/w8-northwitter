import React from 'react';
import './Tweet.css';

class Tweet extends React.Component {
    createImage () {
        if (this.props.mediapic.media) {
            return (
                <img id='mediaPic' src={this.props.mediapic.media[0].media_url}/>
            );
        }
    }
    render () {
        return (
            <div className='tweet'>
                <div className='iconTweet col-xs-2'>
                    <img id='obie' src={this.props.pic} alt="Obama"/>
                </div>
                <div>
                    <p>{this.props.text}</p>
                    {this.createImage()}
                    <div>
                        <span id='heart' className='glyphicon glyphicon-heart-empty'></span>
                        <span id='retweet' className='glyphicon glyphicon-retweet'></span>
                        <span id='comment' className='glyphicon glyphicon-comment'></span>
                        <span id='envelope' className='glyphicon glyphicon-envelope'></span>
                    </div>
                </div>

            </div>
        );
    }
}
export default Tweet;
