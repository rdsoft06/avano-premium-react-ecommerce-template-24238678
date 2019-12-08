import React from "react";
import {
    connect
} from "react-redux";
import {
    addToCart
} from '../../services/cart/actions'
import {
    addToCompare
} from '../../services/compare/actions'
import {
    addToWishlist
} from '../../services/wishlist/actions'
import {
    Link
} from 'react-router-dom';
import {
    changeQuickview
} from '../../services/quickview/actions';
import $ from 'jquery';

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class ProductCard extends React.Component {
    loadQuickview(id) {
        this.props.changeQuickview(id);
        setTimeout(function() {
            $('#modalProduct-' + id).modal('show')
        }, 100);
    }
    render() {
        const {
            symbol,
            addToCart,
            addToCompare,
            addToWishlist,
            lang,
            translate
        } = this.props;
        return ( <
            React.Fragment >
            <
            div className = "product clearfix product-hover" >
            <
            div className = "left" > {
                this.props.sale_label === true &&
                <
                div className = "sale" > {
                    translate('sale2')
                } < /div>
            } <
            div className = "image " >
            <
            Link to = {
                `${process.env.PUBLIC_URL}/product/${this.props.id}`
            } >
            <
            img src = {
                this.props.images[0]
            }
            alt = {
                this.props.title[lang.locale]
            }
            className = "" / >
            <
            /Link> <
            div className = "quickview" > < a href = "#quickview"
            onClick = {
                () => this.loadQuickview(this.props.id)
            } > {
                translate('quickview')
            } < /a></div >
            <
            /div> <
            /div> <
            div className = "right" >
            <
            div className = "name" > < Link to = {
                `${process.env.PUBLIC_URL}/product/${this.props.id}`
            } > {
                this.props.title[lang.locale]
            } < /Link></div >
            <
            div className = "price" > {
                symbol
            } {
                this.props.price
            } <
            /div> <
            div className = "only-hover" >
            <
            a href = "#add_to_cart"
            className = "button"
            onClick = {
                () => addToCart(this.props, 1, translate)
            } > {
                translate('add_to_cart')
            } < /a> <
            ul >
            <
            li > < a href = "#add_to_compare"
            onClick = {
                () => addToCompare(this.props, translate)
            } > < i className = "fas fa-exchange-alt" > < /i></a > < /li> <
            li > < a href = "#add_to_wishlist"
            onClick = {
                () => addToWishlist(this.props, translate)
            } > < i className = "fa fa-heart" > < /i></a > < /li> <
            /ul> <
            /div> <
            /div> <
            /div> <
            /React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.Intl,
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps, {
        addToCart,
        addToCompare,
        addToWishlist,
        changeQuickview
    }
)(withTranslate(ProductCard))