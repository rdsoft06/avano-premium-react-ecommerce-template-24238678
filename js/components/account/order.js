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

class Order extends React.Component {
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
            li > < Link to = "/" > {
                translate('my_account')
            } < /Link></li >
            <
            li > {
                translate('order_history')
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
                translate('order_history')
            } < /h1> <
            div className = "table-responsive" >
            <
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            td className = "text-right" > {
                translate('order_id')
            } < /td> <
            td className = "text-left" > {
                translate('customer')
            } < /td> <
            td className = "text-right" > {
                translate('no_of_products')
            } < /td> <
            td className = "text-left" > {
                translate('status')
            } < /td> <
            td className = "text-right" > {
                translate('total')
            } < /td> <
            td className = "text-left" > {
                translate('date_added')
            } < /td> <
            td > < /td> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td className = "text-right" > #2</td>
                                                                <td className= "text-left" > John Terry < /td> <
            td className = "text-right" > 1 < /td> <
            td className = "text-left" > Complete < /td> <
            td className = "text-right" > $105 .00 < /td> <
            td className = "text-left" > 21 / 07 / 2019 < /td> <
            td className = "text-right" > < Link to = {
                `${process.env.PUBLIC_URL}/account/view_order`
            }
            className = "btn btn-info" > < i className = "fa fa-eye" > < /i></Link > < /td> <
            /tr> <
            /tbody> <
            /table> <
            /div> <
            div class = "buttons clearfix" >
            <
            div class = "pull-right" > < Link to = {
                `${process.env.PUBLIC_URL}/account/account`
            }
            class = "btn btn-primary" > {
                translate('continue')
            } < /Link></div >
            <
            /div> <
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

export default withTranslate(Order);