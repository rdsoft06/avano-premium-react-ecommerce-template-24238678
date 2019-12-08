import React from "react";
import ProductCard from "../shared/productCard";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css';
import {
    connect
} from "react-redux";
import $ from 'jquery';

// Services
import {
    getRelatedProducts
} from "../../services";

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class RelatedProducts extends React.Component {
    componentDidMount() {
        $(".box-product .product").hover(function() {
            $(this).closest(".box-product").addClass("active");
        }, function() {
            $(this).closest(".box-product").removeClass("active");
        });
    }
    componentDidUpdate() {
        $(".box-product .product").hover(function() {
            $(this).closest(".box-product").addClass("active");
        }, function() {
            $(this).closest(".box-product").removeClass("active");
        });
    }
    render() {
        let products = [];
        products = getRelatedProducts(this.props.products, this.props.product_id);
        const {
            translate
        } = this.props;
        const options = {
            slideSpeed: 500,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 2,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                }
            }
        };
        return ( <
            React.Fragment > {
                products.length > 0 ?
                <
                div className = "box clearfix box-with-products with-scroll box-no-advanced" >
                <
                div className = "box-heading" > {
                    translate('related_products')
                } < /div> <
                p className = "next"
                onClick = {
                    () => this.refs.carousel.next()
                } > < span > < /span></p >
                <
                p className = "prev"
                onClick = {
                    () => this.refs.carousel.prev()
                } > < span > < /span></p >
                <
                div className = "strip-line" > < /div>

                <
                div className = "box-content" >
                <
                div className = "box-product" >
                <
                OwlCarousel ref = "carousel"
                options = {
                    options
                } > {
                    products.map(product => {
                        return ( <
                            div className = "item"
                            key = {
                                product.id
                            } >
                            <
                            div className = "product-grid" >
                            <
                            ProductCard key = {
                                product.id
                            } { ...product
                            }
                            /> <
                            /div> <
                            /div>
                        );
                    })
                } <
                /OwlCarousel> <
                /div> <
                /div> <
                /div> :
                    ''
            } <
            /React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.data.products
    }
}

export default connect(
    mapStateToProps
)(withTranslate(RelatedProducts));