import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Link
} from 'react-router-dom';
import {
    connect
} from "react-redux";
import Questions from "../../api/faq";
import {
    Helmet
} from 'react-helmet'

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Faq extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {
            translate,
            lang
        } = this.props;
        return ( <
            > { /*SEO Support*/ } <
            Helmet >
            <
            title > Avano | Faq Page < /title> <
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
                translate('faq')
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
                translate('faq')
            } < /h1> <
            div className = "faq-area" >
            <
            div className = "faq-section" >
            <
            div id = "questions" > {
                Questions.map((question, index) => {
                    return ( <
                        div className = "panel panel-faq"
                        key = {
                            index
                        } >
                        <
                        div className = "panel-heading" >
                        <
                        h4 className = "panel-title" >
                        <
                        a data - toggle = "collapse"
                        data - parent = "#questions"
                        href = {
                            '#answer-' + index
                        }
                        aria - expanded = "false"
                        className = "collapsed" > {
                            index + 1
                        }. {
                            question.title[lang.locale]
                        } <
                        /a> <
                        /h4> <
                        /div> <
                        div id = {
                            'answer-' + index
                        }
                        className = "panel-collapse collapse"
                        aria - expanded = "false" >
                        <
                        div className = "panel-body" >
                        <
                        div dangerouslySetInnerHTML = {
                            {
                                __html: question.content[lang.locale]
                            }
                        }
                        /> <
                        /div> <
                        /div> <
                        /div>
                    )
                })
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
    lang: state.Intl
})

export default connect(
    mapStateToProps
)(withTranslate(Faq))