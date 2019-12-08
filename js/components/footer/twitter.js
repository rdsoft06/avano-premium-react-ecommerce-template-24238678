import React from 'react';
import {
    TwitterTimelineEmbed
} from 'react-twitter-embed';

class Twitter extends React.Component {
    render() {
        return ( <
            React.Fragment >
            <
            h4 > Twitter < /h4> <
            div className = "strip-line" > < /div> <
            div className = "clearfix" >
            <
            TwitterTimelineEmbed sourceType = "profile"
            screenName = "envato"
            options = {
                {
                    height: 120
                }
            }
            /> <
            /div> <
            /React.Fragment>
        );
    }
}

export default Twitter;