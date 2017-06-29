import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    render () {
        return (
            <div className='component-profile'>
                <div className='topRow'>
                    <div className='profileImage col-xs-4'>
                        <img id='donald' src="https://az616578.vo.msecnd.net/files/responsive/cover/main/desktop/2016/06/13/6360139435793044861461393096_Donald-Trump-prune-face.jpg" alt="Donald Trump"/>
                    </div>
                    <div className='profileName col-xs-8'>
                        <p className='user'>Donald Trump</p>
                        <p className='user-handle'>@US-GOV</p>
                    </div>
                </div>
                <div className='bottomRow'>
                    <div className='stat col-xs-4'>
                        <p>Tweets</p>
                        <p>664</p>
                    </div>
                    <div className='stat col-xs-4'>
                        <p>Following</p>
                        <p> 6773</p>
                    </div>
                    <div className='stat col-xs-4'>
                        <p>Followers</p>
                        <p>66464</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;