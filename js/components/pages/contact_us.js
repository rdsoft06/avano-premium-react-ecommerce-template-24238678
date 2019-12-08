import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Link
} from 'react-router-dom';
import {
    Helmet
} from 'react-helmet'

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class ContactUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {
            translate
        } = this.props;
        return ( <
            > { /*SEO Support*/ } <
            Helmet >
            <
            title > Avano | Contact us Page < /title> <
            meta name = "description"
            content = "Avano – Multipurpose eCommerce React Template" / >
            <
            /Helmet> { /*SEO Support End */ } <
            Header / >
            <
            div className = "breadcrumb  full-width " >
            <
            div className = "background-breadcrumb" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            div className = "clearfix" >
            <
            ul >
            <
            li > < Link to = "/" > {
                translate('home')
            } < /Link></li >
            <
            li > {
                translate('contact_us')
            } < /li> <
            /ul> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            div className = "main-content  full-width  home" >
            <
            div className = "background-content" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-12 center-column" >
            <
            h1 id = "title-page" > {
                translate('contact_us')
            } < /h1> <
            div className = "row" >
            <
            div className = "col-md-12" >
            <
            div className = "panel panel-default" >
            <
            div className = "panel-body" >
            <
            div className = "row" >
            <
            div className = "col-md-3" >
            <
            strong > Your Store < /strong><br / >
            <
            address > Address 1 < /address> <
            /div> <
            div className = "col-md-3" > < strong > {
                translate('phone')
            } < /strong><br / > 123456789 < br / > < br / > < /div> <
            /div> <
            /div> <
            /div> <
            form action = ""
            method = "post"
            lassName = "form-horizontal" >
            <
            fieldset >
            <
            h3 > {
                translate('contact_form')
            } < /h3> <
            div className = "row form-group required" >
            <
            label className = "col-md-2 control-label"
            for = "input-name" > {
                translate('your_name')
            } < /label> <
            div className = "col-md-10" > < input type = "text"
            name = "name"
            id = "input-name"
            className = "form-control" / > < /div> <
            /div> <
            div className = "row form-group required" >
            <
            label className = "col-md-2 control-label"
            for = "input-email" > {
                translate('email_address')
            } < /label> <
            div className = "col-md-10" > < input type = "text"
            name = "email"
            id = "input-email"
            className = "form-control" / > < /div> <
            /div> <
            div className = "row form-group required" >
            <
            label className = "col-md-2 control-label"
            for = "input-enquiry" > {
                translate('enquiry')
            } < /label> <
            div className = "col-md-10" > < textarea name = "enquiry"
            rows = "10"
            id = "input-enquiry"
            className = "form-control" > < /textarea></div >
            <
            /div> <
            /fieldset> <
            div className = "buttons" >
            <
            div className = "pull-right" > < input className = "btn btn-primary"
            type = "submit"
            value = {
                translate('submit')
            }
            /></div >
            <
            /div> <
            /form> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            Footer googleMap = "true" / >
            <
            />
        );
    }
}

export default withTranslate(ContactUs);