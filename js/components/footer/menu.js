import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    withTranslate
} from 'react-redux-multilingual'

class Menu extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        return ( <
            div className = "row" >
            <
            div className = "col-md-3" >
            <
            h4 > {
                translate('information')
            } < /h4> <
            div className = "strip-line" > < /div> <
            ul >
            <
            li > < Link to = "/about_us" > {
                translate('about_us')
            } < /Link></li >
            <
            li > < Link to = "/delivery_information" > {
                translate('delivery_information')
            } < /Link></li >
            <
            li > < Link to = "/privacy_policy" > {
                translate('privacy_policy')
            } < /Link></li >
            <
            li > < Link to = "/terms_and_conditions" > {
                translate('terms_and_conditions')
            } < /Link></li >
            <
            /ul> <
            /div> <
            div className = "col-md-3" >
            <
            h4 > {
                translate('customer_service')
            } < /h4> <
            div className = "strip-line" > < /div> <
            ul >
            <
            li > < Link to = "/contact_us" > {
                translate('contact_us')
            } < /Link></li >
            <
            li > < Link to = "/returns" > {
                translate('returns')
            } < /Link></li >
            <
            li > < Link to = "/sitemap" > {
                translate('sitemap')
            } < /Link></li >
            <
            /ul> <
            /div> <
            div className = "col-md-3" >
            <
            h4 > {
                translate('extras')
            } < /h4> <
            div className = "strip-line" > < /div> <
            ul >
            <
            li > < Link to = "/brands" > {
                translate('brands')
            } < /Link></li >
            <
            li > < Link to = "/gift_certificates" > {
                translate('gift_certificates')
            } < /Link></li >
            <
            li > < Link to = "/affiliates" > {
                translate('affiliates')
            } < /Link></li >
            <
            li > < Link to = "/specials" > {
                translate('specials')
            } < /Link></li >
            <
            /ul> <
            /div> <
            div className = "col-md-3" >
            <
            h4 > {
                translate('my_account')
            } < /h4> <
            div className = "strip-line" > < /div> <
            ul >
            <
            li > < Link to = "/account/account" > {
                translate('my_account')
            } < /Link></li >
            <
            li > < Link to = "/account/order" > {
                translate('order_history')
            } < /Link></li >
            <
            li > < Link to = "/wishlist" > {
                translate('wishlist')
            } < /Link></li >
            <
            li > < Link to = "/account/newsletter" > {
                translate('newsletter')
            } < /Link></li >
            <
            /ul> <
            /div> <
            /div>
        );
    }
}

export default withTranslate(Menu);