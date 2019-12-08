import React from "react";

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class TabSizeChart extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        return ( <
            div className = "table-responsive size-chart-table" >
            <
            table className = "table" >
            <
            thead >
            <
            tr >
            <
            td className = "bold" > {
                translate('clothing')
            } < /td> <
            td > XS < /td> <
            td > S < /td> <
            td > M < /td> <
            td > L < /td> <
            td > XL < /td> <
            /tr> <
            /thead> <
            tbody >
            <
            tr >
            <
            th className = "bold" > UK < /th> <
            td > 6 < /td> <
            td > 6 < /td> <
            td > 6 < /td> <
            td > 6 < /td> <
            td > 6 < /td> <
            /tr> <
            tr >
            <
            th className = "bold" > EU < /th> <
            td > 34 < /td> <
            td > 34 < /td> <
            td > 34 < /td> <
            td > 34 < /td> <
            td > 34 < /td> <
            /tr> <
            tr >
            <
            th className = "bold" > {
                translate('chest_bust')
            }(cm) < /th> <
            td > 79 < /td> <
            td > 79 < /td> <
            td > 79 < /td> <
            td > 79 < /td> <
            td > 79 < /td> <
            /tr> <
            tr >
            <
            th className = "bold" > {
                translate('waist')
            }(cm) < /th> <
            td > 63 < /td> <
            td > 63 < /td> <
            td > 63 < /td> <
            td > 63 < /td> <
            td > 63 < /td> <
            /tr> <
            tr >
            <
            th className = "bold" > {
                translate('lower_chip')
            }(cm) < /th> <
            td > 87 < /td> <
            td > 87 < /td> <
            td > 87 < /td> <
            td > 87 < /td> <
            td > 87 < /td> <
            /tr> <
            /tbody> <
            /table> <
            /div>
        );
    }
}

export default withTranslate(TabSizeChart);