import React from 'react';
import './FindPeople.css';

class FindPeople extends React.Component {
    render () {
        return (
        <div className='find-people'>
            <span id='findIcon' className='glyphicon glyphicon-user'></span>
            <a id='findLink' href='#'>find people you know</a>
        </div>
        );
    }
}
export default FindPeople;
