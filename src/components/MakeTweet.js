import React from 'react';
import './MakeTweet.css';

class MakeTweet extends React.Component {
    render () {
        return (
            <div className='component-makeTweet'>
              <div className='tweetImg'>
                <img id='littleDonald' src="https://az616578.vo.msecnd.net/files/responsive/cover/main/desktop/2016/06/13/6360139435793044861461393096_Donald-Trump-prune-face.jpg" alt="Donald Trump"/>
              </div>
              <div className='newtweet'>
                <textarea id="tweetArea" cols="30" rows="1"></textarea>
              </div>

            </div>
        );
    }
}
export default MakeTweet;

