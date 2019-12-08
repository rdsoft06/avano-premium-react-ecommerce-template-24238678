// react
import React from 'react';
import {
    connect
} from "react-redux";
import store from '../../services/store';
import {
    withTranslate
} from 'react-redux-multilingual'
import {
    IntlActions
} from 'react-redux-multilingual'
import languages from '../../api/languages'

class LanguageForm extends React.Component {
    changeLang(lang) {
        store.dispatch(IntlActions.setLocale(lang))
    }
    render() {
        const {
            locale
        } = this.props;
        return ( <
            form method = "post"
            id = "language_form" >
            <
            div className = "dropdown" >
            <
            a href = "#language"
            className = "dropdown-toggle"
            data - hover = "dropdown"
            data - toggle = "dropdown" > {
                languages.map((language, index) => {
                    if (language.code === locale) return language.title;
                    return null;
                })
            } <
            /a> <
            ul className = "dropdown-menu" > {
                languages.map((language, index) => < li key = {
                        index
                    } > < a href = "#language"
                    onClick = {
                        () => this.changeLang(language.code)
                    } > {
                        language.title
                    } < /a></li > )
            } <
            /ul> <
            /div> <
            /form>
        );
    }
}

function mapStateToProps(state) {
    return {
        locale: state.Intl.locale,
    }
}

export default connect(mapStateToProps)(withTranslate(LanguageForm));