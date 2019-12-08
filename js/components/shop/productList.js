import React from 'react';
import {
    connect
} from "react-redux"
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

// Services
import {
    getProducts
} from "../../services";

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class ProductList extends React.Component {
    render() {
        const {
            translate,
            lang,
            addToCart,
            addToCompare,
            addToWishlist,
            symbol
        } = this.props;
        let products = getProducts(this.props.products, this.props.filter, this.props.lang);
        return ( <
            > {
                products.map(product => {
                    return ( <
                        div key = {
                            product.id
                        } >
                        <
                        div class = "row" >
                        <
                        div class = "image col-md-3" >
                        <
                        Link to = {
                            `${process.env.PUBLIC_URL}/product/${product.id}`
                        } >
                        <
                        img src = {
                            product.images[0]
                        }
                        alt = {
                            product.title[lang.locale]
                        }
                        className = "" / >
                        <
                        /Link> <
                        /div> <
                        div class = "name-desc col-md-6" >
                        <
                        div class = "name" > < Link to = {
                            `${process.env.PUBLIC_URL}/product/${product.id}`
                        } > {
                            product.title[lang.locale]
                        } < /Link></div >
                        <
                        div class = "description" > {
                            product.short_description[lang.locale]
                        } <
                        /div> <
                        /div> <
                        div class = "actions col-md-3" >
                        <
                        div >
                        <
                        div class = "price" > {
                            symbol
                        } {
                            product.price
                        } <
                        /div> <
                        div class = "add-to-cart" >
                        <
                        a href = "#add_to_cart"
                        onClick = {
                            () => addToCart(product, 1, translate)
                        }
                        className = "button" > {
                            translate('add_to_cart')
                        } < /a> <
                        /div> <
                        ul >
                        <
                        li > + < a href = "#add_to_compare"
                        onClick = {
                            () => addToCompare(product, translate)
                        } > {
                            translate('add_to_compare')
                        } < /a></li >
                        <
                        li > + < a href = "#add_to_wishlist"
                        onClick = {
                            () => addToWishlist(product, translate)
                        } > {
                            translate('add_to_wishlist')
                        } < /a></li >
                        <
                        /ul> <
                        /div> <
                        /div> <
                        /div> <
                        /div>
                    );
                })
            } <
            />
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.Intl,
    products: state.data.products,
    filter: state.filter,
    symbol: state.data.symbol
})

export default connect(
    mapStateToProps, {
        addToCart,
        addToCompare,
        addToWishlist
    }
)(withTranslate(ProductList))