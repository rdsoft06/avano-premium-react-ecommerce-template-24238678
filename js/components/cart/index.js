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
    removeFromCart,
    updateQuantity
} from '../../services/cart/actions'
import {
    getCartTotalPrice
} from '../../services'
import {
    withTranslate
} from 'react-redux-multilingual';
import {
    Helmet
} from 'react-helmet'

class Cart extends React.Component {
        state = {
            quantities: [],
        };
        getItemQuantity(item) {
            const {
                quantities
            } = this.state;
            const quantity = quantities.find(x => x.itemId === item.id);

            return quantity ? quantity.value : item.qty;
        }
        handleChangeQuantity = (item, quantity) => {
            this.setState((state) => {
                const stateQuantity = state.quantities.find(x => x.itemId === item.id);
                if (!stateQuantity) {
                    if (quantity === '') {
                        state.quantities.push({
                            itemId: item.id,
                            value: ''
                        });
                    } else {
                        state.quantities.push({
                            itemId: item.id,
                            value: isNaN(parseInt(quantity)) || parseInt(quantity) < 1 ? 1 : parseInt(quantity)
                        });
                    }
                } else {
                    if (quantity === '') {
                        stateQuantity.value = '';
                    } else {
                        stateQuantity.value = isNaN(parseInt(quantity)) || parseInt(quantity) < 1 ? 1 : parseInt(quantity);
                    }
                }

                return {
                    quantities: state.quantities,
                };
            });
        };
        componentDidMount() {
            window.scrollTo(0, 0);
        }
        render() {
            const {
                translate,
                lang,
                symbol,
                removeFromCart,
                updateQuantity,
                cartList,
                total_price
            } = this.props;
            return ( <
                > { /*SEO Support*/ } <
                Helmet >
                <
                title > Avano | My Cart Page < /title> <
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
                    translate('shopping_cart')
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
                    translate('shopping_cart')
                } < /h1> {
                    cartList.length > 0 ? ( <
                            React.Fragment >
                            <
                            div className = "table-responsive cart-info" >
                            <
                            table className = "table" >
                            <
                            thead >
                            <
                            tr >
                            <
                            td className = "text-center" > {
                                translate('image')
                            } < /td> <
                            td className = "text-center hidden-xs" > {
                                translate('product_name')
                            } < /td> <
                            td className = "text-center" > {
                                translate('quantity')
                            } < /td> <
                            td className = "text-right" > {
                                translate('unit_price')
                            } < /td> <
                            td className = "text-right" > {
                                translate('total')
                            } < /td> <
                            /tr> <
                            /thead> <
                            tbody > {
                                cartList.map((item, index) => ( <
                                    tr key = {
                                        index
                                    } >
                                    <
                                    td className = "text-center" >
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
                                    div className = "visible-xs"
                                    style = {
                                        {
                                            paddingTop: '10px'
                                        }
                                    } >
                                    <
                                    Link to = {
                                        `${process.env.PUBLIC_URL}/product/${item.id}`
                                    } > {
                                        item.title[lang.locale]
                                    } < /Link> <
                                    /div> <
                                    /td> <
                                    td className = "text-center hidden-xs" >
                                    <
                                    Link to = {
                                        `${process.env.PUBLIC_URL}/product/${item.id}`
                                    } > {
                                        item.title[lang.locale]
                                    } < /Link> <
                                    /td> <
                                    td className = "text-center" >
                                    <
                                    input type = "text"
                                    name = {
                                        'product[' + item.id + ']'
                                    }
                                    onChange = {
                                        quantity => this.handleChangeQuantity(item, quantity.target.value)
                                    }
                                    value = {
                                        this.getItemQuantity(item)
                                    }
                                    size = "2" / >
                                    &
                                    nbsp; & nbsp; <
                                    input type = "image"
                                    alt = "Update"
                                    src = "/images/update.png"
                                    onClick = {
                                        (event) => updateQuantity(item, this.getItemQuantity(item), translate)
                                    }
                                    /> &
                                    nbsp; & nbsp; < a href = "#remove"
                                    onClick = {
                                        () => {
                                            removeFromCart(item, translate)
                                        }
                                    } > < img src = "/images/remove.png"
                                    alt = "Remove" / > < /a> <
                                    /td> <
                                    td className = "text-right" > {
                                        symbol
                                    } {
                                        item.price
                                    } < /td> <
                                    td className = "text-right" > {
                                        symbol
                                    } {
                                        item.price * item.qty
                                    } < /td> <
                                    /tr>
                                ))
                            } <
                            /tbody> <
                            /table> <
                            /div> <
                            h2 > {
                                translate('what_would_you_like_to_do_next')
                            } < /h2> <
                            p style = {
                                {
                                    paddingBottom: '10px'
                                }
                            } > {
                                translate('cart_text_1')
                            } < /p> <
                            div className = "panel-group"
                            id = "accordion" >
                            <
                            div className = "panel panel-default" >
                            <
                            div className = "panel-heading" >
                            <
                            h4 className = "panel-title" > < a data - toggle = "collapse"
                            href = "#collapse-coupon"
                            role = "button"
                            aria - expanded = "false"
                            aria - controls = "collapse-coupon"
                            className = "collapsed" > {
                                translate('use_coupon_code')
                            } < i className = "fa fa-caret-down" > < /i></a > < /h4> <
                            /div> <
                            div id = "collapse-coupon"
                            className = "collapse" >
                            <
                            div className = "panel-body" >
                            <
                            div className = "row" >
                            <
                            label className = "col-sm-2 align-self-center control-label"
                            htmlFor = "input-coupon" > {
                                translate('enter_your_coupon_here')
                            } < /label> <
                            div className = "input-group col-sm-10" >
                            <
                            input type = "text"
                            name = "coupon"
                            placeholder = {
                                translate('enter_your_coupon_here')
                            }
                            id = "input-coupon"
                            className = "form-control" / >
                            <
                            span className = "input-group-btn" >
                            <
                            input type = "button"
                            value = {
                                translate('apply_coupon')
                            }
                            id = "button-coupon"
                            className = "btn btn-primary" / >
                            <
                            /span> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            div className = "panel panel-default" >
                            <
                            div className = "panel-heading" >
                            <
                            h4 className = "panel-title" > < a href = "#collapse-voucher"
                            data - toggle = "collapse"
                            data - parent = "#accordion"
                            className = "accordion-toggle collapsed"
                            aria - expanded = "false" > {
                                translate('use_gift_certificate')
                            } < i className = "fa fa-caret-down" > < /i></a > < /h4> <
                            /div> <
                            div id = "collapse-voucher"
                            className = "panel-collapse collapse" >
                            <
                            div className = "panel-body" >
                            <
                            div className = "row" >
                            <
                            label className = "col-sm-2 align-self-center control-label"
                            htmlFor = "input-voucher" > {
                                translate('enter_your_gift_certificate_code_here')
                            } < /label> <
                            div className = "input-group col-sm-10" >
                            <
                            input type = "text"
                            name = "voucher"
                            placeholder = {
                                translate('enter_your_gift_certificate_code_here')
                            }
                            id = "input-voucher"
                            className = "form-control" / >
                            <
                            span className = "input-group-btn" >
                            <
                            input type = "submit"
                            value = {
                                translate('apply_gift_certificate')
                            }
                            id = "button-voucher"
                            data - loading - text = "Loading..."
                            className = "btn btn-primary" / >
                            <
                            /span>  <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            div className = "cart-total" >
                            <
                            table >
                            <
                            tbody >
                            <
                            tr >
                            <
                            td className = "text-right" > < strong > {
                                translate('total')
                            }: < /strong></td >
                            <
                            td className = "text-right" > {
                                symbol
                            } {
                                total_price
                            } < /td> <
                            /tr> <
                            /tbody> <
                            /table> <
                            /div> <
                            div className = "buttons" >
                            <
                            div className = "pull-left" > < Link to = "/shop"
                            className = "btn btn-default" > {
                                translate('continue_shopping')
                            } < /Link></div >
                            <
                            div className = "pull-right" > < Link to = "/checkout"
                            className = "btn btn-primary" > {
                                translate('checkout')
                            } < /Link></div >
                            <
                            /div> <
                            /React.Fragment>
                        ) : < p > {
                            translate('cart_empty')
                        } < /p>} <
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
                cartList: state.cartList.cart,
                total_price: getCartTotalPrice(state.cartList.cart),
                symbol: state.data.symbol,
            }
        }

        export default connect(mapStateToProps, {
            removeFromCart,
            updateQuantity
        })(withTranslate(Cart));