import React from 'react';
import Tweet from './Tweet';
import './TweetList.css';

class TweetList extends React.Component {
    render () {
        return (
            <div className='component-TweetList'>
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
        );
    }
}
export default TweetList;

