import React from 'react';
import NavBar from './NavBar';
import './App.css';
import Profile from './Profile';
import Trends from './Trends';
import MakeTweet from './MakeTweet';
import TweetList from './TweetList';
import Follow from './Follow';
import FindPeople from './FindPeople';

class App extends React.Component {
  render() {
    return (
      <div className="component-App">
        <NavBar />
        <div className='main container-fluid'>
          <div className='area-left col-md-3'>
            <Profile />
            <Trends />
          </div>
          <div className='area-centre col-md-6'>
            <MakeTweet />
            <TweetList />
          </div>
          <div className='area-right col-md-3'>
            <Follow />
            <FindPeople />
            
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