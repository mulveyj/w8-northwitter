import React from 'react';
import NavBar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <NavBar />
        <div className='main container-fluid'>
          <div className='area-left col-md-3'>
            <div className='component-profile'>
              Profile
            </div>
            <div className='component-trends'>
              Trends
            </div>
          </div>
          <div className='area-centre col-md-6'>
            <div className='component-makeTweet'>
              Make Tweet
            </div>
            <div className='component-TweetList'>
              TweetList
            </div>
          </div>
          <div className='area-right col-md-3'>
            <div className='component-follow'>
              Follow
            </div>
            <div className='component-policy'>
              Policy
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;