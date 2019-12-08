// react
import React from 'react';
import {
    connect
} from "react-redux";
import {
    withTranslate
} from 'react-redux-multilingual'
import {
    removeFromCart
} from '../../services/cart/actions'
import {
    getCartTotalPrice,
    getCartTotalItems
} from '../../services'
import {
    Link
} from 'react-router-dom'
import $ from 'jquery';

class ShoppingCart extends React.Component {
    componentDidMount() {
        $(document).on('click', '#cart_block .dropdown-menu', function(e) {
            e.stopPropagation();
        });
    }
    render() {
        const {
            translate,
            cartList,
            total_price,
            total_items,
            symbol,
            lang,
            removeFromCart
        } = this.props;
        return ( <
            div id = "cart_block"
            className = "dropdown" >
            <
            div className = "cart-heading dropdown-toogle"
            data - toggle = "dropdown" >
            <
            i className = "fa fa-shopping-cart" > < /i> <
            span id = "cart-total" > {
                total_items
            } {
                translate('items')
            }, {
                symbol
            } {
                total_price
            } < /span> <
            /div>

            <
            div className = "dropdown-menu"
            id = "cart_content" >
            <
            div id = "cart_content_ajax" > {
                (cartList.length > 0) ?
                <
                div >
                <
                div className = "mini-cart-info" >
                <
                table >
                <
                tbody > {
                    cartList.map((item, index) => ( <
                        tr key = {
                            index
                        } >
                        <
                        td className = "image" >
                        <
                        Link to = {
                            `${process.env.PUBLIC_URL}/product/${item.id}`
                        } >
                        <
                        img src = {
                            item.images[0]
                        }
                        alt = {
                            item.title[lang.locale]
                        }
                        title = {
                            item.title[lang.locale]
                        }
                        /> <
                        /Link> <
                        /td> <
                        td className = "name" > < Link to = {
                            `${process.env.PUBLIC_URL}/product/${item.id}`
                        } > {
                            item.title[lang.locale]
                        } < /Link> <
                        div className = "d-block d-md-none" >
                        <
                        div className = "quantity2" > x & nbsp; {
                            item.qty
                        } < /div> <
                        div className = "total2" > {
                            symbol
                        } {
                            item.price
                        } < /div> <
                        /div> <
                        /td> <
                        td className = "quantity" > x & nbsp; {
                            item.qty
                        } < /td> <
                        td className = "total" > {
                            symbol
                        } {
                            item.price
                        } < /td> <
                        td className = "remove" > < a href = "#delete_item"
                        onClick = {
                            () => {
                                removeFromCart(item, translate)
                            }
                        } > x < /a></td >
                        <
                        /tr>
                    ))
                } <
                /tbody> <
                /table> <
                /div> <
                div className = "mini-cart-total" >
                <
                table >
                <
                tbody >
                <
                tr >
                <
                td className = "right" > < b > {
                    translate('total')
                } : < /b></td >
                    <
                    td className = "right" > {
                        symbol
                    } {
                        total_price
                    } < /td> <
                    /tr> <
                    /tbody> <
                    /table> <
                    /div> <
                    div className = "checkout" >
                    <
                    Link to = {
                        `${process.env.PUBLIC_URL}/cart`
                    }
                className = "button" > {
                    translate('view_cart')
                } < /Link>  &
                nbsp; & nbsp; <
                Link to = {
                    `${process.env.PUBLIC_URL}/checkout`
                }
                className = "button" > {
                    translate('checkout')
                } < /Link> <
                /div> <
                /div>:
                    <
                    div className = "empty" > {
                        translate('cart_empty')
                    } < /div>
            } <
            /div> <
            /div> <
            /div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lang: state.Intl,
        cartList: state.cartList.cart,
        total_price: getCartTotalPrice(state.cartList.cart),
        total_items: getCartTotalItems(state.cartList.cart),
        symbol: state.data.symbol,
    }
}

export default connect(mapStateToProps, {
    removeFromCart
})(withTranslate(ShoppingCart));