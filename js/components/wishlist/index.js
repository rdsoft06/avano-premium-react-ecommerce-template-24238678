import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Link
} from 'react-router-dom';
import {
    connect
} from "react-redux"
import {
    addToCart
} from '../../services/cart/actions'
import {
    removeFromWishlist
} from '../../services/wishlist/actions'
import {
    withTranslate
} from 'react-redux-multilingual';
import {
    Helmet
} from 'react-helmet'

class Wishlist extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {
            translate,
            wishlist,
            lang,
            symbol,
            removeFromWishlist,
            addToCart
        } = this.props;
        return ( <
            > { /*SEO Support*/ } <
            Helmet >
            <
            title > Avano | Wish List < /title> <
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
                translate('wishlist')
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
                translate('wishlist')
            } < /h1> {
                wishlist.length > 0 ? ( <
                    div className = "table-responsive" >
                    <
                    table className = "table table-hover" >
                    <
                    thead >
                    <
                    tr >
                    <
                    td className = "text-center" > {
                        translate('image')
                    } < /td> <
                    td className = "text-left" > {
                        translate('product_name')
                    } < /td> <
                    td className = "text-right" > {
                        translate('price')
                    } < /td> <
                    td className = "text-right" > {
                        translate('action')
                    } < /td> <
                    /tr> <
                    /thead> <
                    tbody > {
                        wishlist.map((product, index) => {
                            return ( <
                                tr key = {
                                    index
                                } >
                                <
                                td className = "text-center" >
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
                                /td> <
                                td className = "text-left" > < Link to = {
                                    `${process.env.PUBLIC_URL}/product/${product.id}`
                                } > {
                                    product.title[lang.locale]
                                } < /Link></td >
                                <
                                td className = "text-right" > < div className = "price" > {
                                    symbol
                                } {
                                    product.price
                                } < /div></td >
                                <
                                td className = "text-right" >
                                <
                                button type = "button"
                                className = "btn btn-primary"
                                onClick = {
                                    () => addToCart(product, 1, translate)
                                } > < i className = "fa fa-shopping-cart" > < /i></button >
                                &
                                nbsp; < a href = "#remove_from_wishlist"
                                onClick = {
                                    () => removeFromWishlist(product)
                                }
                                className = "btn btn-danger" > < i className = "fa fa-times" > < /i></a >
                                <
                                /td> <
                                /tr>
                            )
                        })
                    } <
                    /tbody> <
                    /table> <
                    /div>
                ) : ( <
                    >
                    <
                    p > {
                        translate('wishlist_empty')
                    } < /p> <
                    />
                )
            } <
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

function mapStateToProps(state) {
    return {
        lang: state.Intl,
        wishlist: state.wishlist.items,
        symbol: state.data.symbol
    }
}

export default connect(
    mapStateToProps, {
        addToCart,
        removeFromWishlist
    }
)(withTranslate(Wishlist))