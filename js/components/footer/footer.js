import React from "react";
import Payments from './payments';
import Menu from './menu';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
import Twitter from './twitter';
import CustomBlock from './customBlock';

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Footer extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        return ( <
            >
            <
            div className = "custom-footer full-width" >
            <
            div className = "background-custom-footer" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-3" >
            <
            AboutUs / >
            <
            /div> <
            div className = "col-md-3" >
            <
            ContactUs / >
            <
            /div> <
            div className = "col-md-3" >
            <
            Twitter / >
            <
            /div> <
            div className = "col-md-3" >
            <
            CustomBlock / >
            <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            div className = "footer  full-width " >
            <
            div className = "background-footer" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            Menu / >
            <
            /div> <
            /div> <
            /div> <
            /div>

            <
            div className = "copyright  full-width " >
            <
            div className = "background-copyright" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            div className = "line" > < /div> <
            Payments / >
            <
            p > {
                translate('powered')
            } < /p>          <
            /div> <
            /div> <
            /div> <
            /div> <
            />
        );
    }
}

export default withTranslate(Footer);