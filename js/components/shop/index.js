import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import BlockProducts from '../blocks/blockProducts'
import WidgetFilter from "../widgets/widgetFilter";
import {
    Link
} from 'react-router-dom';
import './mega_filter.css';
import {
    connect
} from "react-redux"
import ProductGrid from "./productGrid";
import ProductList from "./productList";
import {
    showProducts,
    sortBy,
    changePage
} from '../../services/filter/actions'
import {
    getAllProducts,
    paginationProducts
} from "../../services";
import {
    Helmet
} from 'react-helmet'

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Shop extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('view') === 'list') {
            this.state = {
                grid: '',
                list: 'active',
                product_list: 'product-list active',
                product_grid: 'product-grid'
            };
        } else {
            this.state = {
                grid: 'active',
                list: '',
                product_list: 'product-list',
                product_grid: 'product-grid active'
            };
        }
    }
    handleView(view) {
        localStorage.setItem("view", view);
        if (view === 'grid') {
            this.setState({
                grid: 'active',
                list: '',
                product_grid: 'product-grid active',
                product_list: 'product-list'
            })
        } else if (view === 'list') {
            this.setState({
                list: 'active',
                grid: '',
                product_grid: 'product-grid',
                product_list: 'product-list active'
            })
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {
            translate,
            filter,
            showProducts,
            sortBy,
            changePage
        } = this.props;
        const pagination = paginationProducts(this.props.products, this.props.filter);
        const products = getAllProducts(this.props.products, this.props.filter);
        return ( <
            > { /*SEO Support*/ } <
            Helmet >
            <
            title > Avano | Shop < /title> <
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
                translate('shop')
            } < /li> <
            /ul> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            div className = "main-content  full-width" >
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
            div className = "col-md-3 "
            id = "column-left" >
            <
            WidgetFilter / >
            <
            BlockProducts title = {
                translate('bestsellers')
            }
            carousel = "false"
            itemsperpage = "1"
            limit = "4"
            productsType = "bestsellers"
            catId = "all" / >
            <
            /div>

            <
            div className = "col-md-9" >
            <
            div className = "row" >
            <
            div className = "col-md-12 center-column"
            id = "content" >
            <
            h1 > {
                translate('shop')
            } < /h1> <
            div id = "mfilter-content-container" >
            <
            div className = "category-info clearfix" >
            <
            div className = "image" > < img src = "/images/category-info-847x120.jpg"
            alt = {
                translate('shop')
            }
            /></div >
            <
            /div> <
            div className = "product-filter clearfix" >
            <
            div className = "options" >
            <
            div className = "product-compare" > < Link to = "/compare"
            id = "compare-total" > {
                translate('product_compare')
            } < /Link></div >
            <
            div className = "button-group display"
            data - toggle = "buttons-radio" >
            <
            button className = {
                this.state.grid
            }
            onClick = {
                () => this.handleView('grid')
            }
            id = "grid"
            rel = "tooltip"
            title = "Grid" > < i className = "fa fa-th" > < /i></button >
            <
            button className = {
                this.state.list
            }
            onClick = {
                () => this.handleView('list')
            }
            id = "list"
            rel = "tooltip"
            title = "List" > < i className = "fa fa-th-list" > < /i></button >
            <
            /div> <
            /div> <
            div className = "list-options" >
            <
            div className = "sort" > {
                translate('sort_by')
            }:
            <
            select onChange = {
                (item) => sortBy(item.target.value)
            }
            value = {
                filter.sort_by
            } >
            <
            option value = "1" > {
                translate('default')
            } < /option> <
            option value = "2" > {
                translate('name')
            }(A - Z) < /option> <
            option value = "3" > {
                translate('name')
            }(Z - A) < /option> <
            option value = "4" > {
                translate('price_low_high')
            } < /option> <
            option value = "5" > {
                translate('price_high_low')
            } < /option> <
            /select> <
            /div> <
            div className = "limit" > {
                translate('show')
            }:
            <
            select onChange = {
                (item) => showProducts(item.target.value)
            }
            value = {
                filter.show
            } >
            <
            option value = "16" > 16 < /option> <
            option value = "30" > 30 < /option> <
            option value = "100" > 100 < /option> <
            /select> <
            /div> <
            /div> <
            /div> {
                parseInt(products.length) === 0 ? ( <
                    p > {
                        translate('no_products')
                    } < /p>
                ) : ( <
                    > {
                        this.state.product_list === 'product-list active' &&
                        <
                        div className = {
                            this.state.product_list
                        } >
                        <
                        ProductList / >
                        <
                        /div>
                    }

                    {
                        this.state.product_grid === 'product-grid active' &&
                            <
                            div className = {
                                this.state.product_grid
                            } >
                            <
                            ProductGrid / >
                            <
                            /div>
                    }

                    <
                    div className = "row pagination-results" >
                    <
                    div className = "col-md-6 text-left" >
                    <
                    ul className = "pagination" > {
                        pagination.map(page => {
                            return ( <
                                li className = {
                                    filter.page === page ? 'active' : ''
                                }
                                key = {
                                    page
                                } > < a href = "#pagination"
                                onClick = {
                                    () => changePage(page)
                                } > {
                                    page
                                } < /a></li >
                            );
                        })
                    } <
                    /ul> <
                    /div> <
                    div className = "col-md-6 text-right" > {
                        translate('showing')
                    } {
                        (parseInt(filter.page) - 1) * parseInt(filter.show) + 1
                    } {
                        translate('to')
                    } {
                        parseInt(products.length) < parseInt(filter.show) * parseInt(filter.page) ? parseInt(products.length) : parseInt(filter.show) * parseInt(filter.page)
                    } {
                        translate('of')
                    } {
                        parseInt(products.length)
                    }({
                        parseInt(pagination.length)
                    } {
                        translate('pages')
                    }) < /div> <
                    /div> <
                    />
                )
            } <
            /div> <
            /div> <
            /div> <
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

const mapStateToProps = (state) => ({
    products: state.data.products,
    filter: state.filter
})

export default connect(
    mapStateToProps, {
        showProducts,
        sortBy,
        changePage
    }
)(withTranslate(Shop))