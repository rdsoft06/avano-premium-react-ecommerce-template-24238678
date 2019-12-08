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
import InnerImageZoom from 'react-inner-image-zoom'
import Options from '../product/options';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class QuickView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            activeImage: {
                index: 0,
                src: this.props.item.images[0]
            }
        };
    }
    changeImage(image, index) {
        this.setState({
            activeImage: {
                index: index,
                src: image
            }
        })
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
            symbol,
            addToCart,
            addToCompare,
            addToWishlist,
            lang,
            translate,
            item
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
            div className = "modal modal-quickview  fade"
            id = {
                'modalProduct-' + item.id
            }
            role = "dialog"
            aria - label = "myModalLabel"
            aria - hidden = "true" >
            <
            div className = "modal-dialog modal-lg" >
            <
            div className = "modal-content " >
            <
            div className = "modal-body" >
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
            div className = "col-md-6 popup-gallery" >
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
            div className = "col-md-6 product-center clearfix" >
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
            }: < /span><b>{item.product_code}</b > < br / >
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
            /div> <
            /div> <
            /div> <
            /div> <
            /div>

            <
            /div> <
            /div> <
            /div> <
            /div>  <
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
        addToWishlist
    }
)(withTranslate(QuickView))