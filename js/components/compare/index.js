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
    removeFromCompare
} from '../../services/compare/actions'
import {
    withTranslate
} from 'react-redux-multilingual';
import {
    Helmet
} from 'react-helmet'

class Compare extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {
            translate,
            compare,
            lang,
            symbol,
            removeFromCompare,
            addToCart
        } = this.props;
        return ( <
            > { /*SEO Support*/ } <
            Helmet >
            <
            title > Avano | Compare Page < /title> <
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
                translate('product_compare')
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
                translate('product_compare')
            } < /h1> {
                compare.length > 0 ? ( <
                    table className = "table" >
                    <
                    thead >
                    <
                    tr >
                    <
                    td colspan = "3" > < strong > {
                        translate('product_details')
                    } < /strong></td >
                    <
                    /tr> <
                    /thead> <
                    tbody >
                    <
                    tr >
                    <
                    td > {
                        translate('product')
                    } < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td > < Link to = {
                                    `${process.env.PUBLIC_URL}/product/${product.id}`
                                } > {
                                    product.title[lang.locale]
                                } < /Link></td >
                            )
                        })
                    } <
                    /tr> <
                    tr >
                    <
                    td > {
                        translate('image')
                    } < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td >
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
                                /td>
                            )
                        })
                    } <
                    /tr> <
                    tr >
                    <
                    td > {
                        translate('price')
                    } < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td > {
                                    symbol
                                } {
                                    product.price
                                } < /td>
                            )
                        })
                    } <
                    /tr> <
                    tr >
                    <
                    td > {
                        translate('brand')
                    } < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td > {
                                    product.brand.title[lang.locale]
                                } < /td>
                            )
                        })
                    } <
                    /tr> <
                    tr >
                    <
                    td > {
                        translate('availability')
                    } < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td > {
                                    product.availability === 'in_stock' ? translate('in_stock') : translate('out_of_stock')
                                } <
                                /td>
                            )
                        })
                    } <
                    /tr> <
                    tr >
                    <
                    td > {
                        translate('rating')
                    } < /td> {
                        compare.map((item, index) => {
                            return ( <
                                td >
                                <
                                div className = "rating" > < i className = {
                                    item.rating > 0 ? 'fa fa-star active' : 'fa fa-star'
                                } > < /i><i className={item.rating > 1 ? 'fa fa-star active' : 'fa fa-star'}></i > < i className = {
                                    item.rating > 2 ? 'fa fa-star active' : 'fa fa-star'
                                } > < /i><i className={item.rating > 3 ? 'fa fa-star active' : 'fa fa-star'}></i > < i className = {
                                    item.rating > 4 ? 'fa fa-star active' : 'fa fa-star'
                                } > < /i>&nbsp;&nbsp;&nbsp;{item.count_of_reviews} {translate('reviews')}</div >
                                <
                                /td>
                            )
                        })
                    } <
                    /tr> <
                    tr >
                    <
                    td > {
                        translate('summary')
                    } < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td className = "description" >
                                <
                                div dangerouslySetInnerHTML = {
                                    {
                                        __html: product.short_description[lang.locale]
                                    }
                                }
                                /> <
                                /td>
                            )
                        })
                    } <
                    /tr> <
                    /tbody> <
                    tbody >
                    <
                    tr >
                    <
                    td > < /td> {
                        compare.map((product, index) => {
                            return ( <
                                td >
                                <
                                button type = "button"
                                className = "btn btn-primary"
                                onClick = {
                                    () => addToCart(product, 1, translate)
                                } > < i className = "fa fa-shopping-cart" > < /i></button >
                                &
                                nbsp; < button type = "buttton"
                                onClick = {
                                    () => removeFromCompare(product)
                                }
                                className = "btn btn-danger" > < i className = "fa fa-times" > < /i></button >
                                <
                                /td>
                            )
                        })
                    } <
                    /tr> <
                    /tbody> <
                    /table>
                ) : ( <
                    >
                    <
                    p > {
                        translate('compare_empty')
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
        compare: state.compare.items,
        symbol: state.data.symbol
    }
}

export default connect(
    mapStateToProps, {
        addToCart,
        removeFromCompare
    }
)(withTranslate(Compare))