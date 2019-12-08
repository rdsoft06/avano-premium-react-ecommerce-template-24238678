import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Link
} from 'react-router-dom';
import {
    withTranslate
} from 'react-redux-multilingual';
import {
    Helmet
} from 'react-helmet'

class Checkout extends React.Component {
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
            title > Avano | Checkout Page < /title> <
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
                translate('checkout')
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
            div className = "col-md-12 center-column"
            id = "content" >
            <
            h1 > {
                translate('checkout')
            } < /h1> <
            div className = "panel-group checkout"
            id = "accordion" >
            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading heading-iconed" >
            <
            h4 className = "panel-title case-c" > < a data - toggle = "collapse"
            data - parent = "#accordion"
            href = "#collapseOne" > {
                translate('step')
            }
            1: {
                translate('checkout_text_1')
            } < /a></h
            4 >
            <
            /div>

            <
            div id = "collapseOne"
            className = "panel-collapse collapse show" >
            <
            div className = "panel-body" >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            h3 > {
                translate('checkout_text_2')
            } < /h3> <
            p > {
                translate('checkout_text_3')
            } < /p> <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > {
                translate('checkout_text_4')
            } < /label></div >
            <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > {
                translate('checkout_text_5')
            } < /label></div >
            <
            p > {
                translate('checkout_text_6')
            } < /p> <
            button className = "btn btn-default" > {
                translate('continue')
            } < /button> <
            /div>

            <
            div className = "col-md-6" >
            <
            h3 > {
                translate('sign_in')
            } < /h3> <
            form >
            <
            div className = "form-group" >
            <
            label > {
                translate('email_address')
            } < /label> <
            input type = "email"
            className = "form-control"
            placeholder = {
                translate('email_address')
            }
            /> <
            /div>

            <
            div className = "form-group" >
            <
            label > {
                translate('password')
            } < /label> <
            input type = "password"
            className = "form-control"
            placeholder = {
                translate('password')
            }
            /> <
            /div>

            <
            div className = "form-group" >
            <
            label className = "checkbox-inline" > < input type = "checkbox"
            value = "" / > {
                translate('remember_me')
            } < /label> <
            /div>

            <
            button className = "btn btn-default" > {
                translate('sign_in')
            } < /button> <
            /form> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>

            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading heading-iconed" >
            <
            h4 className = "panel-title" > < a data - toggle = "collapse"
            data - parent = "#accordion"
            href = "#collapseTwo" > {
                translate('step')
            }
            2: {
                translate('checkout_text_7')
            } < /a></h
            4 >
            <
            /div>

            <
            div id = "collapseTwo"
            className = "panel-collapse collapse" >
            <
            div className = "panel-body" >
            <
            form >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('first_name')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('first_name')
            }
            /> <
            /div> <
            /div>

            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('last_name')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('last_name')
            }
            /> <
            /div> <
            /div>

            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('country')
            } < /label> <
            select className = "form-control" >
            <
            option > -- - < /option> <
            /select> <
            /div> <
            /div>

            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('city')
            } < /label> <
            select className = "form-control" >
            <
            option > -- - < /option> <
            /select> <
            /div> <
            /div>

            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('phone')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('phone')
            }
            /> <
            /div> <
            /div>

            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('postal_code')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('postal_code')
            }
            /> <
            /div> <
            /div> <
            /div>

            <
            div className = "form-group" >
            <
            label > {
                translate('address_line')
            }
            1 < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('address_line')
            }
            /> <
            /div>

            <
            div className = "form-group" >
            <
            label > {
                translate('address_line')
            }
            2 < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('address_line')
            }
            /> <
            /div>  <
            /form> <
            /div> <
            /div> <
            /div>

            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading heading-iconed" >
            <
            h4 className = "panel-title" > < a data - toggle = "collapse"
            data - parent = "#accordion"
            href = "#collapseThree" > {
                translate('step')
            }
            3: {
                translate('checkout_text_8')
            } < /a></h
            4 >
            <
            /div>

            <
            div id = "collapseThree"
            className = "panel-collapse collapse" >
            <
            div className = "panel-body" >
            <
            p > {
                translate('checkout_text_9')
            } < /p> <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > {
                translate('checkout_text_10')
            } < /label></div >
            <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > {
                translate('checkout_text_11')
            } < /label></div >
            <
            /div> <
            /div> <
            /div>

            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading heading-iconed" >
            <
            h4 className = "panel-title" > < a data - toggle = "collapse"
            data - parent = "#accordion"
            href = "#collapseFour" > {
                translate('step')
            }
            4: {
                translate('checkout_text_12')
            } < /a></h
            4 >
            <
            /div>

            <
            div id = "collapseFour"
            className = "panel-collapse collapse" >
            <
            div className = "panel-body" >
            <
            p > {
                translate('checkout_text_13')
            } < /p> <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > {
                translate('cash_on_delivery')
            } < /label></div >
            <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > Paypal < /label></div >
            <
            div className = "radio" > < label > < input value = ""
            name = "acnt-opt"
            type = "radio" / > {
                translate('credit_card')
            } < /label></div >

            <
            hr / >

            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('name_on_card')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('name_on_card')
            }
            /> <
            /div> <
            /div>

            <
            div className = "col-md-6" >
            <
            div className = "form-group" >
            <
            label > {
                translate('credit_card_number')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('credit_card_number')
            }
            /> <
            /div> <
            /div>

            <
            div className = "col-md-4" >
            <
            div className = "form-group" >
            <
            label > {
                translate('card_type')
            } < /label> <
            select className = "form-control" >
            <
            option > -- - < /option> <
            /select> <
            /div> <
            /div>

            <
            div className = "col-md-4" >
            <
            div className = "form-group" >
            <
            label > {
                translate('expiration_date')
            } < /label> <
            select className = "form-control" >
            <
            option > -- - < /option> <
            /select> <
            /div> <
            /div>

            <
            div className = "col-md-4" >
            <
            div className = "form-group" >
            <
            label > {
                translate('ccv_code')
            } < /label> <
            input type = "text"
            className = "form-control"
            placeholder = {
                translate('ccv_code')
            }
            /> <
            /div> <
            /div> <
            /div>

            <
            hr / >

            <
            button className = "btn btn-default" > {
                translate('complete_order')
            } < /button> <
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


export default withTranslate(Checkout);