// react
import React from 'react';
import {
    withTranslate
} from 'react-redux-multilingual'
import {
    connect
} from "react-redux";
import {
    changeCurrency
} from '../../services/products/actions'
import curriences from '../../api/curriences'

class CurrencyForm extends React.Component {
    render() {
        const {
            symbol
        } = this.props;
        return ( <
            form method = "post"
            id = "currency_form" >
            <
            div className = "dropdown" >
            <
            a href = "#currency"
            className = "dropdown-toggle"
            data - hover = "dropdown"
            data - toggle = "dropdown"
            aria - expanded = "false" > {
                curriences.map((currency, index) => {
                    if (currency.currency.symbol === symbol) return currency.title;
                    return null;
                })
            } <
            /a> <
            ul className = "dropdown-menu" > {
                curriences.map((currency, index) => < li key = {
                        index
                    } > < a href = "#currency"
                    onClick = {
                        () => this.props.changeCurrency(currency.currency.symbol)
                    } > {
                        currency.title
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
        symbol: state.data.symbol,
    }
}

export default connect(mapStateToProps, {
    changeCurrency
})(withTranslate(CurrencyForm));