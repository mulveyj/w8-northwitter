import React from 'react';
import Tweet from './Tweet';
import axios from 'axios';
import './TweetList.css';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';

class TweetList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tweets: []
        };
    }
    componentDidMount() {
        axios.get(`${API_URL}/tweets`)
            .then((res) => {
                this.setState({
                    tweets: res.data.tweets.reduce((acc, item) => {
                        return acc.concat(item);
                    }, []).sort((a, b) => {
                        const t1 = new Date(a.created_at).getTime();
                        const t2 = new Date(b.created_at).getTime();
                        return t2 - t1;
                    })
                });
            })
            .then(()=>{
                console.log(this.state.tweets.entities);
            })
            .catch(console.log);
    }
    render () {
        return (
            <div className='component-TweetList'>
                {this.state.tweets.slice(0, 10).map((tweet) => {
                    return (
                        <Tweet 
                            text={tweet.text}
                            pic={tweet.user.profile_image_url} 
                            mediapic={tweet.entities}/>
                    );   
                })}
            </div>
        );
    }
}
export default TweetList;

