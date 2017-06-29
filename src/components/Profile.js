import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    render () {
        return (
            <div className='component-profile'>
                <div className='topRow'>
                    <div className='profileImage col-md-1'>
                        I
                    </div>
                    <div className='profileName col-md-2'>
                        P
                    </div>
                </div>
                <ul className='bottomRow'>
                    <li className='tweets'>
                        <p>T 6645</p>
                    </li>
                    <li className='following'>
                        <p>F 6645</p>
                    </li>
                    <li className='followers'>
                        <p> 6645</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile;