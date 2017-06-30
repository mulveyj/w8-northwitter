import React from 'react';
import './Trends.css';
import Trend from './Trend';
import axios from 'axios';

const API_URL = 'https://northwitter-api-jinwmdmaba.now.sh';

class Trends extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            trends: [] 
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}/trends`)
            .then((res) => {
                this.setState({
                    trends: res.data.trends
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render () {
        return (
            <div className='component-trends panel'>
                <div className='panel-body'>
                    <h3 className='panel-title'>
                        Trends
                    </h3>
                    {this.state.trends.length === 0 ? 
                        <p>Loading...</p> :
                        this.state.trends.slice(0, 10).map((trend) => {
                            return (
                                <Trend 
                                name={trend.name}
                                tweet_volume={trend.tweet_volume}
                                url={trend.url}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Trends;