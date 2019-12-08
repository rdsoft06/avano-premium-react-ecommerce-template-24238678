import React from 'react';
import {
    Link
} from 'react-router-dom'
import {
    withTranslate
} from 'react-redux-multilingual'

class TopBarMenu extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        return ( <
            ul className = "menu" >
            <
            li className = "" >
            <
            a href = "#my-account"
            title = "My Account"
            data - hover = "dropdown"
            className = "dropdown-toggle"
            data - toggle = "dropdown" > {
                translate('my_account')
            } < b className = "caret" > < /b></a >
            <
            ul className = "dropdown-menu dropdown-menu-right" >
            <
            li > < Link to = "/account/register" > {
                translate('register')
            } < /Link></li >
            <
            li > < Link to = "/account/login" > {
                translate('login')
            } < /Link></li >
            <
            /ul> <
            /li> <
            li > < Link to = "/wishlist" > {
                translate('wishlist')
            } < /Link></li >
            <
            li > < Link to = "/cart" > {
                translate('shopping_cart')
            } < /Link></li >
            <
            li > < Link to = "/checkout" > {
                translate('checkout')
            } < /Link></li >
            <
            /ul>
        );
    }
}

export default withTranslate(TopBarMenu);