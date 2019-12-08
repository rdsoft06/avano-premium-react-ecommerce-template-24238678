import React from 'react';
import {
    withTranslate
} from 'react-redux-multilingual'

class ContactUs extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        return ( <
            React.Fragment >
            <
            h4 > {
                translate('contact_us')
            } < /h4> <
            div className = "strip-line" > < /div> <
            div className = "clearfix" >
            <
            ul className = "contact-us clearfix" >
            <
            li >
            <
            i className = "fa fa-phone" > < /i> <
            p >
            +48 661 662 663 < br / >
            (032) 156 147 158 <
            /p> <
            /li> <
            li >
            <
            i className = "fa fa-envelope" > < /i> <
            p >
            <
            span > office @example < /span><br / >
            <
            span > info @ask.com < /span> <
            /p> <
            /li> <
            li >
            <
            i className = "fab fa-skype" > < /i> <
            p >
            skypelogin < br / >
            profileskype <
            /p> <
            /li> <
            /ul> <
            /div> <
            /React.Fragment>
        );
    }
}

export default withTranslate(ContactUs);