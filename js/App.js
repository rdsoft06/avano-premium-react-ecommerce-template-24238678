import React from 'react';
import {
    BrowserRouter as Router
} from "react-router-dom";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Main css
import './App.css';

// Products
import {
    getAllProducts
} from './services/products/actions'

// Layouts
import Page from './components/layout';

// Multilanguage
import translations from './constants/translations'
import store from './services/store'
import {
    IntlReducer as Intl,
    IntlProvider
} from 'react-redux-multilingual'
import {
    Provider
} from 'react-redux'

// Notify
import {
    ToastContainer
} from 'react-toastify';

class App extends React.Component {
    render() {
        store.dispatch(getAllProducts());
        return ( <
            Provider store = {
                store
            } >
            <
            IntlProvider translations = {
                translations
            }
            locale = 'en' >
            <
            Router basename = {
                process.env.PUBLIC_URL
            } >
            <
            div className = "standard-body" >
            <
            div id = "main" >
            <
            Page / >
            <
            ToastContainer / >
            <
            /div> <
            /div> <
            /Router> <
            /IntlProvider> <
            /Provider>
        );
    }
}

export default App;