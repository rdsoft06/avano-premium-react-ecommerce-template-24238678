import React from 'react';
import BlockProducts from '../blocks/blockProducts'
import BlockSlider from '../blocks/blockSlider'
import BlockBanners1 from '../blocks/blockBanners1'
import BlockBanners2 from '../blocks/blockBanners2'
import BlockBanners3 from '../blocks/blockBanners3'
import BlockBanners4 from '../blocks/blockBanners4'
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Helmet
} from 'react-helmet'

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Index extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {
            translate
        } = this.props;
        return ( <
            > { /*SEO Support*/ } <
            Helmet >
            <
            title > Avano | Home Page < /title> <
            meta name = "description"
            content = "Avano – Multipurpose eCommerce React Template" / >
            <
            /Helmet> { /*SEO Support End */ } <
            Header / >
            <
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
            div className = "col-md-9" >
            <
            BlockSlider / >
            <
            /div> <
            div className = "col-md-3" >
            <
            BlockBanners1 / >
            <
            /div> <
            /div> <
            BlockBanners2 / >
            <
            BlockProducts title = {
                translate('latest_products')
            }
            carousel = "true"
            itemsperpage = "6"
            limit = "12"
            productsType = "latest"
            catId = "all" / >
            <
            BlockBanners3 / >
            <
            div className = "row" >
            <
            div className = "col-md-3"
            id = "column_left" >
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
            /div> <
            div className = "col-md-9" >
            <
            BlockProducts title = {
                translate('featured')
            }
            carousel = "true"
            itemsperpage = "4"
            limit = "8"
            productsType = "featured"
            catId = "all" / >
            <
            BlockBanners4 / >
            <
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

export default withTranslate(Index);