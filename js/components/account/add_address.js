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

class AddAddress extends React.Component {
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
                translate('address_book')
            } < /li> <
            li > {
                translate('add_address')
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
                translate('add_address')
            } < /h1> <
            form action = ""
            method = "post"
            className = "form-horizontal" >
            <
            fieldset >
            <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-firstname" > {
                translate('first_name')
            } < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "firstname"
            placeholder = {
                translate('first_name')
            }
            id = "input-firstname"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-lastname" > {
                translate('last_name')
            } < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "lastname"
            placeholder = {
                translate('last_name')
            }
            id = "input-lastname"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-company" > {
                translate('company')
            } < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "company"
            placeholder = {
                translate('company')
            }
            id = "input-company"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-address-1" > {
                translate('address')
            }
            1 < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "address_1"
            placeholder = {
                translate('address')
            }
            id = "input-address-1"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-address-2" > {
                translate('address')
            }
            2 < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "address_2"
            placeholder = {
                translate('address')
            }
            id = "input-address-2"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-city" > {
                translate('city')
            } < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "city"
            placeholder = {
                translate('city')
            }
            id = "input-city"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-postcode" > {
                translate('post_code')
            } < /label> <
            div className = "col-md-10" >
            <
            input type = "text"
            name = "postcode"
            placeholder = {
                translate('post_code')
            }
            id = "input-postcode"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-country" > {
                translate('country')
            } < /label> <
            div className = "col-md-10" >
            <
            select name = "country_id"
            id = "input-country"
            className = "form-control" >
            <
            option > -- - Please Select-- - < /option> <
            /select> <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            label className = "col-md-2 control-label align-self-center"
            htmlFor = "input-zone" > {
                translate('region')
            } < /label> <
            div className = "col-md-10" >
            <
            select name = "zone_id"
            id = "input-zone"
            className = "form-control" > < option > -- - Please Select-- - < /option></select >
            <
            /div> <
            /div> <
            /fieldset> <
            div className = "buttons clearfix" >
            <
            div className = "pull-left" > < Link to = {
                `${process.env.PUBLIC_URL}/account/address`
            }
            className = "btn btn-default" > {
                translate('back')
            } < /Link></div >
            <
            div className = "pull-right" >
            <
            input type = "submit"
            value = {
                translate('continue')
            }
            className = "btn btn-primary" / >
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

export default withTranslate(AddAddress);