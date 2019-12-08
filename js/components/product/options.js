import React from "react";

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Options extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        return ( <
            div className = "options" >
            <
            h2 > {
                translate('available_options')
            } < /h2> <
            div className = "form-group" >
            <
            label className = "control-label" > {
                translate('size')
            } < /label> <
            div id = "input-option232" >
            <
            div className = "radio  radio-type-button2"
            data - toggle = "tooltip"
            data - placement = "top"
            title = ""
            data - original - title = "+$12.00" >
            <
            label >
            <
            input type = "radio"
            name = "option[232]"
            value = "36" / >
            <
            span className = "text active" > S < /span> <
            /label> <
            /div> <
            div className = "radio  radio-type-button2 "
            data - toggle = "tooltip"
            data - placement = "top"
            title = ""
            data - original - title = "+$18.00" >
            <
            label >
            <
            input type = "radio"
            name = "option[232]"
            value = "37" / >
            <
            span className = "text" > M <
            /span> <
            /label> <
            /div> <
            div className = "radio  radio-type-button2 "
            data - toggle = "tooltip"
            data - placement = "top"
            title = ""
            data - original - title = "+$24.00" >
            <
            label >
            <
            input type = "radio"
            name = "option[232]"
            value = "38" / >
            <
            span className = "text" > L <
            /span> <
            /label> <
            /div> <
            /div> <
            /div> <
            /div>
        );
    }
}

export default withTranslate(Options);