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

class ViewOrder extends React.Component {
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
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            td className = "text-left"
            colspan = "2" > {
                translate('order_details')
            } < /td> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td className = "text-left" >
            <
            b > {
                translate('order_id')
            }: < /b> #2<br / >
            <
            b > {
                translate('date_added')
            }: < /b> 21/
            07 / 2019 <
            /td> <
            td className = "text-left" >
            <
            b > {
                translate('payment_method')
            }: < /b> method 1<br / >
            <
            b > {
                translate('shipping_method')
            }: < /b> method 1  <
            /td> <
            /tr> <
            /tbody> <
            /table> <
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            td className = "text-left" > {
                translate('payment_address')
            } < /td> <
            td className = "text-left" > {
                translate('shipping_address')
            } < /td> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td className = "text-left" > John Terry < br / > City < br / > 84 < br / > Post code 20 - 652 < br / > Dolnoslaskie < br / > Poland < /td> <
            td className = "text-left" > John Terry < br / > City < br / > 84 < br / > Post code 20 - 652 < br / > Dolnoslaskie < br / > Poland < /td> <
            /tr> <
            /tbody> <
            /table> <
            div className = "table-responsive" >
            <
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            td className = "text-left" > {
                translate('product_name')
            } < /td> <
            td className = "text-left" > {
                translate('model')
            } < /td> <
            td className = "text-right" > {
                translate('quantity')
            } < /td> <
            td className = "text-right" > {
                translate('price')
            } < /td> <
            td className = "text-right" > {
                translate('total')
            } < /td> <
            td > < /td> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td className = "text-left" > iPod Classic < /td> <
            td className = "text-left" > product 20 < /td> <
            td className = "text-right" > 1 < /td> <
            td className = "text-right" > $100 .00 < /td> <
            td className = "text-right" > $100 .00 < /td> <
            td className = "text-right" > < a href = "#shopping"
            className = "btn btn-primary" > < i className = "fa fa-shopping-cart" > < /i></a > < a href = "#reply"
            className = "btn btn-danger" > < i className = "fa fa-reply" > < /i></a > < /td> <
            /tr> <
            /tbody> <
            tfoot >
            <
            tr >
            <
            td colspan = "3" > < /td> <
            td className = "text-right" > < b > {
                translate('subtotal')
            } < /b></td >
            <
            td className = "text-right" > $100 .00 < /td> <
            td > < /td> <
            /tr> <
            tr >
            <
            td colspan = "3" > < /td> <
            td className = "text-right" > < b > {
                translate('flat_shipping_rate')
            } < /b></td >
            <
            td className = "text-right" > $5 .00 < /td> <
            td > < /td> <
            /tr> <
            tr >
            <
            td colspan = "3" > < /td> <
            td className = "text-right" > < b > {
                translate('total')
            } < /b></td >
            <
            td className = "text-right" > $105 .00 < /td> <
            td > < /td> <
            /tr> <
            /tfoot> <
            /table> <
            /div> <
            h3 > {
                translate('order_history')
            } < /h3> <
            table className = "table table-hover" >
            <
            thead >
            <
            tr >
            <
            td className = "text-left" > {
                translate('date_added')
            } < /td> <
            td className = "text-left" > {
                translate('status')
            } < /td> <
            td className = "text-left" > {
                translate('comment')
            } < /td> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            td className = "text-left" > 21 / 07 / 2019 < /td> <
            td className = "text-left" > {
                translate('pending')
            } < /td> <
            td className = "text-left" > < /td> <
            /tr> <
            tr >
            <
            td className = "text-left" > 21 / 07 / 2019 < /td> <
            td className = "text-left" > {
                translate('complete')
            } < /td> <
            td className = "text-left" > < /td> <
            /tr> <
            tr >
            <
            td className = "text-left" > 21 / 07 / 2019 < /td> <
            td className = "text-left" > {
                translate('shipped')
            } < /td> <
            td className = "text-left" > < /td> <
            /tr> <
            /tbody> <
            /table> <
            div className = "buttons clearfix" >
            <
            div className = "pull-right" > < Link to = {
                `${process.env.PUBLIC_URL}/account/order`
            }
            className = "btn btn-primary" > {
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

export default withTranslate(ViewOrder);