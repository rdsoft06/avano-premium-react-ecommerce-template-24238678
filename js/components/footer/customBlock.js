import React from 'react';

class CustomBlock extends React.Component {
    render() {
        return ( <
            React.Fragment >
            <
            h4 > Custom block < /h4> <
            div className = "strip-line" > < /div> <
            div className = "clearfix" >
            <
            div className = "custom-footer-text" > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. < /div> <
                /div> <
                /React.Fragment>
        );
    }
}

export default CustomBlock;