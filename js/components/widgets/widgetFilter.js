import React from 'react';
import {
    connect
} from "react-redux";
import $ from 'jquery';
import categories from '../../api/categories'
import brands from '../../api/brands'
import colors from '../../api/colors'
import {
    changeCategory,
    addBrand,
    removeBrand,
    addColor,
    removeColor
} from '../../services/filter/actions'

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class WidgetFilter extends React.Component {
    componentDidMount() {
        $(".open-filter").click(function() {
            $(".aside, .close-aside-box").addClass("active");
            $("body").css("overflow", "hidden");
        });

        $(".close-aside-box, .close-aside-box2").click(function() {
            $(".aside, .close-aside-box").removeClass("active");
            $("body").css("overflow", "visible");
        });
    }
    render() {
        const {
            translate,
            lang,
            filter,
            changeCategory,
            addBrand,
            removeBrand,
            addColor,
            removeColor
        } = this.props;
        return ( <
            >
            <
            div className = "box box-with-categories"
            id = "mfilter-box-32" >
            <
            h3 className = "box-heading" > {
                translate('megafilter_pro')
            } < /h3> <
            div className = "box-content mfilter-content" >
            <
            ul >
            <
            li className = "mfilter-filter-item mfilter-tree mfilter-categories" >
            <
            div className = "mfilter-heading" >
            <
            div className = "mfilter-heading-content" >
            <
            div className = "mfilter-heading-text" >
            <
            span > {
                translate('shop')
            } < /span> <
            /div> <
            i className = "mfilter-head-icon" > < /i> <
            /div> <
            /div>

            <
            div className = "mfilter-content-opts" >
            <
            div className = "mfilter-opts-container" >
            <
            div className = "mfilter-content-wrapper mfilter-iscroll scroll-content scroll-wrapper mfilter-scroll-standard" >
            <
            div className = "mfilter-options" >
            <
            div className = "mfilter-category mfilter-category-tree" >
            <
            input type = "hidden"
            name = "path"
            value = "mp3-players" / >
            <
            ul className = "mfilter-tb"
            data - top - url = ""
            data - top - path = "0" > {
                filter.category > 0 ? ( <
                    li className = "mfilter-to-parent" >
                    <
                    a href = "#category"
                    onClick = {
                        () => changeCategory(0)
                    } > {
                        categories.map(category => {
                            if (category.id === filter.category) {
                                return ( <
                                    span key = {
                                        category.id
                                    } > {
                                        category.title[lang.locale]
                                    } < /span>
                                )
                            } else {
                                return false;
                            }
                        })
                    } <
                    /a> <
                    /li>
                ) : ( <
                    > {
                        categories.map(category => {
                            return ( <
                                li className = "mfilter-tb-as-tr"
                                key = {
                                    category.id
                                } >
                                <
                                div className = "mfilter-tb-as-td" >
                                <
                                a href = "#category"
                                onClick = {
                                    () => changeCategory(category.id)
                                } > {
                                    category.title[lang.locale]
                                } < /a> <
                                /div> <
                                /li>
                            );
                        })
                    } <
                    />
                )
            } <
            /ul> <
            /div> <
            /div> <
            /div>

            <
            div className = "mfilter-clearfix" > < /div> <
            /div>

            <
            div className = "mfilter-clearfix" > < /div> <
            /div> <
            /li> <
            li className = "mfilter-filter-item mfilter-image mfilter-option mfilter-options" >
            <
            div className = "mfilter-heading" >
            <
            div className = "mfilter-heading-content" >
            <
            div className = "mfilter-heading-text" >
            <
            span > {
                translate('color')
            } < /span> <
            /div> <
            i className = "mfilter-head-icon" > < /i> <
            /div> <
            /div>

            <
            div className = "mfilter-content-opts" >
            <
            div className = "mfilter-opts-container" >
            <
            div className = "mfilter-content-wrapper mfilter-iscroll scroll-content scroll-wrapper" >
            <
            div className = "mfilter-options" >
            <
            div className = "mfilter-tb" >
            <
            ul > {
                colors.map(color => {
                    return ( <
                        div key = {
                            color.id
                        } > {
                            filter.colors.indexOf(color.id) > -1 ? ( <
                                li className = "mfilter-option mfilter-image mfilter-visible mfilter-image-checked"
                                onClick = {
                                    () => removeColor(color.id)
                                }
                                key = {
                                    color.id
                                } >
                                <
                                input type = "checkbox"
                                style = {
                                    {
                                        display: 'none '
                                    }
                                }
                                /> <
                                label >
                                <
                                img src = {
                                    color.image
                                }
                                alt = {
                                    color.id
                                }
                                /> <
                                /label> <
                                /li>
                            ) : ( <
                                li className = "mfilter-option mfilter-image mfilter-visible"
                                onClick = {
                                    () => addColor(color.id)
                                }
                                key = {
                                    color.id
                                } >
                                <
                                input type = "checkbox"
                                style = {
                                    {
                                        display: 'none '
                                    }
                                }
                                /> <
                                label >
                                <
                                img src = {
                                    color.image
                                }
                                alt = {
                                    color.id
                                }
                                /> <
                                /label> <
                                /li>
                            )
                        } <
                        /div>
                    );
                })
            } <
            /ul> <
            /div> <
            /div> <
            /div> <
            div className = "mfilter-clearfix" > < /div> <
            /div> <
            div className = "mfilter-clearfix" > < /div> <
            /div> <
            /li> <
            li className = "mfilter-filter-item mfilter-checkbox mfilter-manufacturers" >
            <
            div className = "mfilter-heading" >
            <
            div className = "mfilter-heading-content" >
            <
            div className = "mfilter-heading-text" >
            <
            span > {
                translate('manufacturers')
            } < /span> <
            /div> <
            i className = "mfilter-head-icon" > < /i> <
            /div> <
            /div>

            <
            div className = "mfilter-content-opts" >
            <
            div className = "mfilter-opts-container" >
            <
            div className = "mfilter-content-wrapper mfilter-iscroll scroll-content scroll-wrapper" >
            <
            div className = "mfilter-options" >
            <
            div className = "mfilter-options-container" >
            <
            div className = "mfilter-tb" > {
                brands.map(brand => {
                    return ( <
                        div key = {
                            brand.id
                        } > {
                            filter.brands.indexOf(brand.id) > -1 ? ( <
                                div className = "mfilter-option mfilter-tb-as-tr mfilter-visible"
                                onClick = {
                                    () => removeBrand(brand.id)
                                }
                                key = {
                                    brand.id
                                } >
                                <
                                div className = 'mfilter-tb-as-td mfilter-col-input mfilter-input-active' >
                                <
                                input id = {
                                    'mfilter-opts-attribs-32-manufacturers-' + brand.id
                                }
                                name = "manufacturers"
                                type = "checkbox"
                                readOnly = {
                                    true
                                }
                                checked = {
                                    true
                                }
                                /> <
                                /div> <
                                label className = "mfilter-tb-as-td" > {
                                    brand.title[lang.locale]
                                } < /label> <
                                /div>
                            ) : ( <
                                div className = "mfilter-option mfilter-tb-as-tr mfilter-visible"
                                onClick = {
                                    () => addBrand(brand.id)
                                }
                                key = {
                                    brand.id
                                } >
                                <
                                div className = 'mfilter-tb-as-td mfilter-col-input' >
                                <
                                input id = {
                                    'mfilter-opts-attribs-32-manufacturers-' + brand.id
                                }
                                name = "manufacturers"
                                type = "checkbox"
                                readOnly = {
                                    true
                                }
                                checked = {
                                    false
                                }
                                /> <
                                /div> <
                                label className = "mfilter-tb-as-td" > {
                                    brand.title[lang.locale]
                                } < /label> <
                                /div>
                            )
                        } <
                        /div>
                    );
                })
            } <
            /div> <
            /div> <
            /div> <
            /div> <
            div className = "mfilter-clearfix" > < /div> <
            /div> <
            div className = "mfilter-clearfix" > < /div> <
            /div> <
            /li> <
            /ul> <
            /div> <
            /div> <
            />
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.Intl,
    filter: state.filter
})

export default connect(
    mapStateToProps, {
        changeCategory,
        addBrand,
        removeBrand,
        addColor,
        removeColor
    }
)(withTranslate(WidgetFilter))