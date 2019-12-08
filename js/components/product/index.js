import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Link
} from 'react-router-dom';
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
    InlineShareButtons
} from 'sharethis-reactjs';
import InnerImageZoom from 'react-inner-image-zoom'
import $ from 'jquery';
import RelatedProducts from './relatedProducts';
import TabSizeChart from './tabSizeChart';
import TabReview from './tabReview';
import Options from './options';
import {
    Helmet
} from 'react-helmet'
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Product extends React.Component {
    constructor(props) {
        super(props);
        if (typeof props.item !== 'undefined') {
            this.state = {
                quantity: 1,
                activeImage: {
                    index: 0,
                    src: this.props.item.images[0]
                }
            };
        }
    }
    changeImage(image, index) {
        this.setState({
            activeImage: {
                index: index,
                src: image
            }
        })
    }
    componentDidUpdate(previousProps, previousState) {
        if (previousProps.item !== this.props.item) {
            window.scrollTo(0, 0);
            this.setState({
                quantity: 1,
                activeImage: {
                    index: 0,
                    src: this.props.item.images[0]
                }
            })
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        $.fn.tabs = function() {
            var selector = this;

            this.each(function() {
                var obj = $(this);

                $(obj.attr('href')).hide();

                $(obj).click(function() {
                    $(selector).removeClass('selected');

                    $(selector).each(function(i, element) {
                        $($(element).attr('href')).hide();
                    });

                    $(this).addClass('selected');

                    $($(this).attr('href')).show();

                    return false;
                });
            });

            $(this).show();

            $(this).first().click();
        };
        $('#tabs a').tabs();
    }
    increaseQuantity() {
        this.setState({
            quantity: parseInt(this.state.quantity) + 1
        });
    }
    decreaseQuantity() {
        if (parseInt(this.state.quantity) > 1) {
            this.setState({
                quantity: parseInt(this.state.quantity) - 1
            });
        }
    }
    changeQuantity(value) {
        if (parseInt(value) > 0) {
            this.setState({
                quantity: parseInt(value)
            });
        }
    }
    render() {
        const {
            translate,
            lang,
            symbol,
            item,
            addToCart,
            addToWishlist,
            addToCompare
        } = this.props;
        const options = {
            slideSpeed: 500,
            margin: 10,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 4,
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 5,
                }
            }
        };
        return ( <
            React.Fragment >
            <
            Header / > {
                item ?
                <
                React.Fragment > { /*SEO Support*/ } <
                Helmet >
                <
                title > Avano | {
                    item.title[lang.locale]
                } < /title> <
                meta name = "description"
                content = {
                    item.short_description[lang.locale]
                }
                /> <
                /Helmet> { /*SEO Support End */ } <
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
                    item.title[lang.locale]
                } < /li> <
                /ul> <
                /div> <
                /div> <
                /div> <
                /div> <
                /div> <
                div className = "main-content  full-width " >
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
                div className = "product-info" >
                <
                div className = "row" >
                <
                div className = "col-md-12" >
                <
                div className = "row"
                id = "quickview_product" >
                <
                div className = "col-md-5 popup-gallery" >
                <
                div className = "product-image cloud-zoom" > {
                    item.sale_label === true &&
                    <
                    div className = "sale" > {
                        translate('sale2')
                    } < /div>
                } <
                InnerImageZoom src = {
                    this.state.activeImage.src
                }
                /> <
                /div> <
                div className = "overflow-thumbnails-carousel" >
                <
                OwlCarousel options = {
                    options
                }
                className = "thumbnails-carousel owl-carousel" > {
                    item.images.map((image, index) => {
                        return ( <
                            div className = "owl-item"
                            key = {
                                index
                            } > < p > < a href = "#product_image"
                            className = {
                                this.state.activeImage.index === index ? 'popup-image active' : 'popup-image'
                            }
                            onClick = {
                                () => this.changeImage(image, index)
                            } > < img src = {
                                image
                            }
                            title = {
                                item.title[lang.locale]
                            }
                            alt = {
                                item.title[lang.locale]
                            }
                            /></a > < /p></div >
                        );
                    })
                } <
                /OwlCarousel> <
                /div> <
                /div> <
                div className = "col-md-7 product-center clearfix" >
                <
                h1 className = "product-name" > {
                    item.title[lang.locale]
                } < /h1> <
                div className = "review" >
                <
                div className = "rating" > < i className = {
                    item.rating > 0 ? 'fa fa-star active' : 'fa fa-star'
                } > < /i><i className={item.rating > 1 ? 'fa fa-star active' : 'fa fa-star'}></i > < i className = {
                    item.rating > 2 ? 'fa fa-star active' : 'fa fa-star'
                } > < /i><i className={item.rating > 3 ? 'fa fa-star active' : 'fa fa-star'}></i > < i className = {
                    item.rating > 4 ? 'fa fa-star active' : 'fa fa-star'
                } > < /i>&nbsp;&nbsp;&nbsp;<a href="#reviews">{item.count_of_reviews} {translate('reviews')}</a > < /div> <
                /div> <
                div className = "description" >
                <
                span > {
                    translate('product_code')
                } : < /span><b>{item.product_code}</b > < br / >
                    <
                    span > {
                        translate('brand')
                    }: < /span><b>{item.brand.title[lang.locale]}</b > < br / >
                    <
                    span > {
                        translate('availability')
                    }: < /span><b>{item.availability === 'in_stock' ? translate('in_stock') : translate('out_of_stock')}</b >
                    <
                    /div> <
                    div className = "price" >
                    <
                    span className = "price-new" > {
                        symbol
                    } {
                        item.price
                    } < /span> <
                    /div> <
                    div id = "product" >
                    <
                    Options / >
                    <
                    div className = "cart" >
                    <
                    div className = "add-to-cart d-flex" >
                    <
                    div className = "quantity" >
                    <
                    input type = "text"
                name = "quantity"
                id = "quantity_wanted"
                size = "2"
                value = {
                    this.state.quantity
                }
                onChange = {
                    (event) => this.changeQuantity(event.target.value)
                }
                /> <
                a href = "#quantity_up"
                id = "q_up"
                onClick = {
                    () => this.increaseQuantity()
                } > < i className = "fa fa-plus" > < /i></a >
                <
                a href = "#quantity_down"
                id = "q_down"
                onClick = {
                    () => this.decreaseQuantity()
                } > < i className = "fa fa-minus" > < /i></a >
                <
                /div> <
                input type = "button"
                value = {
                    translate('add_to_cart')
                }
                onClick = {
                    () => addToCart(item, this.state.quantity, translate)
                }
                className = "button" / >
                <
                /div> <
                div className = "links clearfix" >
                <
                a href = "#add_to_wishlist"
                onClick = {
                    () => addToWishlist(item, translate)
                } > < span > < i className = "fas fa-heart" > < /i></span > {
                    translate('add_to_wishlist')
                } < /a> <
                a href = "#add_to_compare"
                onClick = {
                    () => addToCompare(item, translate)
                } > < span > < i className = "fas fa-exchange-alt" > < /i></span > {
                    translate('add_to_compare')
                } < /a> <
                /div> <
                /div> <
                /div> <
                div className = "share" >
                <
                InlineShareButtons
                config = {
                    {
                        alignment: 'left', // alignment of buttons (left, center, right)
                        color: 'social', // set the color of buttons (social, white)
                        enabled: true, // show/hide buttons (true, false)
                        font_size: 14, // font size for the buttons
                        labels: 'null', // button labels (cta, counts, null)
                        language: 'en', // which language to use (see LANGUAGES)
                        networks: [ // which networks to include (see SHARING NETWORKS)
                            'whatsapp',
                            'linkedin',
                            'messenger',
                            'facebook',
                            'twitter'
                        ],
                        padding: 10, // padding within buttons (INTEGER)
                        radius: 0, // the corner radius on each button (INTEGER)
                        show_total: false,
                        size: 34, // the size of each button (INTEGER)
                    }
                }
                /> <
                /div> <
                /div> <
                /div> <
                /div> <
                /div> <
                /div>

                <
                div id = "tabs"
                className = "htabs" >
                <
                a href = "#tab-description"
                className = "selected" > {
                    translate('description')
                } < /a> <
                a href = "#tab_2"
                className = "" > {
                    translate('size_chart')
                } < /a> <
                a href = "#tab-review" > {
                    translate('reviews')
                }({
                    item.count_of_reviews
                }) < /a> <
                /div>

                <
                div id = "tab-description"
                className = "tab-content"
                style = {
                    {
                        display: 'block'
                    }
                } >
                <
                div dangerouslySetInnerHTML = {
                    {
                        __html: item.description[lang.locale]
                    }
                }
                /> <
                /div>

                <
                div id = "tab_2"
                className = "tab-content" >
                <
                TabSizeChart / >
                <
                /div>

                <
                div id = "tab-review"
                className = "tab-content" >
                <
                TabReview product_id = {
                    item.id
                }
                /> <
                /div>

                <
                RelatedProducts product_id = {
                    item.id
                }
                /> <
                /div> <
                /div> <
                /div> <
                /div> <
                /div> <
                /div> <
                /React.Fragment>: ''
            } <
            Footer / >
            <
            /React.Fragment>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        lang: state.Intl,
        item: state.data.products.find(el => parseInt(el.id) === parseInt(productId)),
        symbol: state.data.symbol
    }
}

export default connect(
    mapStateToProps, {
        addToCart,
        addToWishlist,
        addToCompare
    }
)(withTranslate(Product));