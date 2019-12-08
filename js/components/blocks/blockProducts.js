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
    getNewProducts,
    getBestsellersProducts,
    getFeaturedProducts
} from "../../services";

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class BlockProducts extends React.Component {
    componentDidMount() {
        $(".box-product .product").hover(function() {
            $(this).closest(".box-product").addClass("active");
        }, function() {
            $(this).closest(".box-product").removeClass("active");
        });
    }
    render() {
        let products = [];
        if (this.props.productsType === 'bestsellers') {
            products = getBestsellersProducts(this.props.products, this.props.catId, this.props.limit);
        } else if (this.props.productsType === 'featured') {
            products = getFeaturedProducts(this.props.products, this.props.catId, this.props.limit);
        } else {
            products = getNewProducts(this.props.products, this.props.catId, this.props.limit);
        }
        var productsClass = 'col-6 col-md-4 col-lg-3';
        if (this.props.itemsperpage === '1') {
            productsClass = 'col-12 col-md-12 col-lg-12'
        }
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
                    items: [this.props.itemsperpage],
                }
            }
        };
        return ( <
            div className = "box clearfix box-with-products with-scroll box-no-advanced" >
            <
            div className = "box-heading" > {
                this.props.title
            } < /div> {
                this.props.carousel === 'true' && products.length > 0 &&
                    <
                    React.Fragment >
                    <
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
                    /React.Fragment>
            } <
            div className = "strip-line" > < /div> <
            div className = "box-content" > {
                this.props.carousel === 'true' && products.length > 0 ? ( <
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
                    /div>
                ) : ( <
                    div className = "product-grid" >
                    <
                    div className = "row" > {
                        products.map(product => {
                            return ( <
                                div className = {
                                    productsClass
                                }
                                key = {
                                    product.id
                                } >
                                <
                                ProductCard key = {
                                    product.id
                                } { ...product
                                }
                                /> <
                                /div>
                            );
                        })
                    } <
                    /div> <
                    /div>
                )
            } <
            /div> <
            /div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.data.products
})

export default connect(
    mapStateToProps
)(withTranslate(BlockProducts))