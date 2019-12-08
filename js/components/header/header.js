import React from "react";
import Navigation from './navigation';
import LanguageForm from './languageForm';
import CurrencyForm from './currencyForm';
import ShoppingCart from './shoppingCart';
import Logo from './logo';
import SearchForm from './searchForm';
import TopBarMenu from './topBarMenu';

// Quickview
import QuickView from '../shared/quickview';
import {
    connect
} from "react-redux"

class Header extends React.Component {
    render() {
        return ( <
            >
            <
            header >
            <
            div className = "background-header" > < /div> <
            div className = "slider-header" >
            <
            div id = "top-bar"
            className = "full-width" >
            <
            div className = "background-top-bar" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-4" >
            <
            LanguageForm / >
            <
            CurrencyForm / >
            <
            /div> <
            div className = "col-md-8"
            id = "top-bar-right" >
            <
            TopBarMenu / >
            <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>   <
            /div> <
            div id = "top"
            className = "full-width" >
            <
            div className = "background-top" > < /div> <
            div className = "background" >
            <
            div className = "shadow" > < /div> <
            div className = "pattern" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-5"
            id = "header-left" >
            <
            Logo / >
            <
            /div> <
            div className = "col-md-7"
            id = "header-right" >
            <
            SearchForm / >
            <
            ShoppingCart / >
            <
            /div> <
            /div> <
            /div> <
            Navigation / >
            <
            /div> <
            /div> <
            /div> <
            /div> <
            /header> {
                this.props.products.map(product => {
                    if (this.props.quickview === product.id) {
                        return ( <
                            div key = {
                                product.id
                            } >
                            <
                            QuickView item = {
                                product
                            }
                            /> <
                            /div>
                        )
                    }
                    return false;
                })
            } <
            />
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.data.products,
    quickview: state.quickview.id
})

export default connect(
    mapStateToProps
)(Header)