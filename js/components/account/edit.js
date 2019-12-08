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

class Edit extends React.Component {
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
            title > Avano | My Account Page < /title> <
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
                translate('my_account')
            } < /li> <
            li > {
                translate('edit_information')
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
            div className = "col-md-12" >
            <
            div className = "row" >
            <
            div className = "col-md-9 center-column"
            id = "content" >
            <
            h1 > {
                translate('edit_information')
            } < /h1> <
            form action = ""
            method = "post"
            class = "form-horizontal" >
            <
            fieldset >
            <
            legend > {
                translate('your_personal_details')
            } < /legend> <
            div class = "form-group row required" >
            <
            label class = "col-md-2 control-label align-self-center"
            for = "input-firstname" > {
                translate('first_name')
            } < /label> <
            div class = "col-md-10" >
            <
            input type = "text"
            name = "firstname"
            placeholder = {
                translate('first_name')
            }
            id = "input-firstname"
            class = "form-control" / >
            <
            /div> <
            /div> <
            div class = "form-group row required" >
            <
            label class = "col-md-2 control-label align-self-center"
            for = "input-lastname" > {
                translate('last_name')
            } < /label> <
            div class = "col-md-10" >
            <
            input type = "text"
            name = "lastname"
            placeholder = {
                translate('last_name')
            }
            id = "input-lastname"
            class = "form-control" / >
            <
            /div> <
            /div> <
            div class = "form-group row required" >
            <
            label class = "col-md-2 control-label align-self-center"
            for = "input-email" > {
                translate('email')
            } < /label> <
            div class = "col-md-10" >
            <
            input type = "email"
            name = "email"
            placeholder = {
                translate('email')
            }
            id = "input-email"
            class = "form-control" / >
            <
            /div> <
            /div> <
            div class = "form-group row required" >
            <
            label class = "col-md-2 control-label align-self-center"
            for = "input-telephone" > {
                translate('phone')
            } < /label> <
            div class = "col-md-10" >
            <
            input type = "tel"
            name = "telephone"
            placeholder = {
                translate('phone')
            }
            id = "input-telephone"
            class = "form-control" / >
            <
            /div> <
            /div> <
            /fieldset> <
            div class = "buttons clearfix" >
            <
            div class = "pull-left" > < Link to = {
                `${process.env.PUBLIC_URL}/account/account`
            }
            class = "btn btn-default" > {
                translate('back')
            } < /Link></div >
            <
            div class = "pull-right" >
            <
            input type = "submit"
            value = {
                translate('continue')
            }
            class = "btn btn-primary" / >
            <
            /div> <
            /div> <
            /form> <
            /div> <
            div className = "col-md-3 "
            id = "column-right" >
            <
            div className = "box" >
            <
            div className = "box-heading" > {
                translate('account')
            } < /div> <
            div className = "strip-line" > < /div> <
            div className = "box-content" >
            <
            ul className = "list-box" >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/login`
            } > {
                translate('login')
            } < /Link> / < Link to = {
                `${process.env.PUBLIC_URL}/account/register`
            } > {
                translate('register')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/forgotten`
            } > {
                translate('forgotten')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/account`
            } > {
                translate('my_account')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/address`
            } > {
                translate('address_book')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/wishlist`
            } > {
                translate('wishlist')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/order`
            } > {
                translate('order_history')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/downloads`
            } > {
                translate('downloads')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/return`
            } > {
                translate('returns')
            } < /Link></li >
            <
            li > < Link to = {
                `${process.env.PUBLIC_URL}/account/transaction`
            } > {
                translate('transactions')
            } < /Link></li >
            <
            /ul> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            Footer / >
            <
            />
        );
    }
}

export default withTranslate(Edit);