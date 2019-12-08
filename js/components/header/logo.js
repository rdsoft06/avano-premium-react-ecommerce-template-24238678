import React from 'react';
import {
    Link
} from 'react-router-dom';
import logo from '../../logo.png';

class Logo extends React.Component {
    render() {
        return ( <
            div className = "logo" >
            <
            Link to = "/" >
            <
            img src = {
                logo
            }
            title = "Your Store"
            alt = "Your Store" / >
            <
            /Link> <
            /div>
        );
    }
}

export default Logo;