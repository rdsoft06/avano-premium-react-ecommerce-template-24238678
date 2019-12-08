import React from 'react';
import {
    Link
} from 'react-router-dom';
import "../../navigation.css";
import $ from 'jquery';

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Navigation extends React.Component {
    componentDidMount() {
        var hover = false;
        var megamenuresponsive = false;
        var responsive_design = 'yes';
        $(document).ready(function() {
            setInterval(function() {
                if ($(".megamenu .with-sub-menu.active").length > 0) {
                    $("#menu-hover-background").addClass("active");
                } else {
                    $("#menu-hover-background").removeClass("active");
                }
            }, 10);
            if (responsive_design === 'yes' && $(window).width() < 992) {
                megamenuresponsive = true;
            }

            $("ul.megamenu > li").each(function() {
                var i = 0;
                $(this).find(".mobile-enabled").each(function() {
                    i++;
                });

                if (i === 0) {
                    $(this).find(".open-menu").addClass("mobile-disabled");
                }
            });

            $("ul.megamenu li .sub-menu .content .hover-menu ul li").hover(function() {
                $(this).children("ul").addClass("active");
            }, function() {
                $(this).children("ul").removeClass("active");
            });

            $('.close-categories').on('click', function() {
                $(this).parent().removeClass("active");
                $(this).next().animate({
                    height: "hide"
                }, 400);
                return false;
            });

            $('.open-categories').on('click', function() {
                $(".open-categories").parent().removeClass("active");
                $('.open-categories').next().next().animate({
                    height: "hide"
                }, 400);

                $(this).parent().addClass("active");
                $(this).next().next().animate({
                    height: "show"
                }, 400);
                return false;
            });

            $('.close-menu').on('click', function() {
                $(this).parent().removeClass("active");
                $(this).next().next().next().animate({
                    height: "hide"
                }, 400);
                return false;
            });

            $('.open-menu').on('click', function() {
                $("ul.megamenu > li").removeClass("active");
                $("ul.megamenu > li").find(".sub-menu").animate({
                    height: "hide"
                }, 400);

                $(this).parent().addClass("active");
                $(this).next().next().animate({
                    height: "show"
                }, 400);
                megamenuresponsive = true;
                return false;
            });

            $("ul.megamenu > li.click .content a").click(function() {
                window.location = $(this).attr('href');
            });

            $("ul.megamenu > li.hover").hover(function() {
                if (megamenuresponsive === false) {
                    hover = true;
                    $("ul.megamenu > li").removeClass("active");
                    $(this).addClass("active");
                    $(this).children(".sub-menu").css("right", "auto");
                    var $whatever = $(this).children(".sub-menu");
                    var ending_right = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
                    var $whatever2 = $("ul.megamenu");
                    var ending_right2 = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
                    if (ending_right2 > ending_right) {
                        $(this).children(".sub-menu").css("right", "0");
                    }
                    var widthElement = $(this).children("a").outerWidth() / 2;
                    var marginElement = $(this).children("a").offset().left - $(this).find(".content").offset().left;
                    $(this).find(".content > .arrow").css("left", marginElement + widthElement);
                }
            }, function() {
                if (megamenuresponsive === false) {
                    var rel = $(this).attr("title");
                    hover = false;
                    if (rel === 'hover-intent') {
                        var hoverintent = $(this);
                        setTimeout(function() {
                            if (hover === false) {
                                $(hoverintent).removeClass("active");
                            }
                        }, 500);
                    } else {
                        $(this).removeClass("active");
                    }
                }
            });

            $("ul.megamenu > li.click").click(function() {
                if ($(this).removeClass("active") === true) {
                    return false;
                }
                hover = true;
                $("ul.megamenu > li").removeClass("active");
                $(this).addClass("active");
                $(this).children(".sub-menu").css("right", "auto");
                if (megamenuresponsive === true) $(this).children(".sub-menu").animate({
                    height: "show"
                }, 400);
                var $whatever = $(this).children(".sub-menu");
                var ending_right = ($(window).width() - ($whatever.offset().left + $whatever.outerWidth()));
                var $whatever2 = $("ul.megamenu");
                var ending_right2 = ($(window).width() - ($whatever2.offset().left + $whatever2.outerWidth()));
                if (ending_right2 > ending_right) {
                    $(this).children(".sub-menu").css("right", "0");
                }
                var widthElement = $(this).children("a").outerWidth() / 2;
                var marginElement = $(this).children("a").offset().left - $(this).find(".content").offset().left;
                $(this).find(".content > .arrow").css("left", marginElement + widthElement);
                return false;
            });

            $(".categories-image-right ul > li > a").hover(function() {
                $(this).closest('.categories-image-right').find('img').attr('src', $(this).attr('data-image'));
            }, function() {
                var src = $(this).closest('.categories-image-right').attr('data-image');
                $(this).closest('.categories-image-right').find('img').attr('src', src);
            });

            $(".megaMenuToggle").click(function() {
                if ($(this).removeClass("active") === true) {
                    $(this).parent().find(".megamenu-wrapper").stop(true, true).animate({
                        height: "hide"
                    }, 400);
                } else {
                    $(this).parent().find(".megamenu-wrapper").stop(true, true).animate({
                        height: "toggle"
                    }, 400);
                    $(this).addClass("active");
                }
                return false;
            });

            $('html').on('click', function() {
                if (!(responsive_design === 'yes' && $(window).width() < 768)) {
                    $("ul.megamenu > li.click").removeClass("active");
                }
            });
        });

        $(window).resize(function() {
            megamenuresponsive = false;

            if (responsive_design === 'yes' && $(window).width() < 992) {
                megamenuresponsive = true;
            }
        });
    }
    render() {
        const {
            translate
        } = this.props;
        return ( <
            nav id = "megamenu"
            className = "container-megamenu container horizontal" >
            <
            div className = "megaMenuToggle" >
            <
            div className = "megamenuToogle-wrapper" >
            <
            div className = "megamenuToogle-pattern" >
            <
            div className = "container" >
            <
            div > < span > < /span><span></span > < span > < /span></div >
            Categories <
            /div> <
            /div> <
            /div> <
            /div> <
            div className = "megamenu-wrapper" >
            <
            div className = "megamenu-pattern" >
            <
            div className = "container" >
            <
            ul className = "megamenu shift-up" >
            <
            li className = "home" > < Link to = "/" > < i className = "fa fa-home" > < /i></Link > < /li> <
            li className = "with-sub-menu hover" >
            <
            p className = "close-menu" > < /p> <
            p className = "open-menu" > < /p> <
            Link to = "/shop"
            className = "clearfix" > < span > < strong > {
                translate('men')
            } < /strong></span > < /Link> <
            div className = "sub-menu"
            style = {
                {
                    width: '100%'
                }
            } >
            <
            div className = "content" >
            <
            p className = "arrow" > < /p> <
            div className = "row" >
            <
            div className = "col-md-12  mobile-enabled" >
            <
            div className = "row" >
            <
            div className = "col-md-3 static-menu" >
            <
            div className = "menu" >
            <
            ul >
            <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            1 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            2 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            /ul> <
            /div> <
            /div> <
            div className = "col-md-3 static-menu" >
            <
            div className = "menu" >
            <
            ul >
            <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            3 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            4 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            /ul> <
            /div> <
            /div> <
            div className = "col-md-3 static-menu" >
            <
            div className = "menu" >
            <
            ul >
            <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            4 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            5 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            /ul> <
            /div> <
            /div> <
            div className = "col-md-3 static-menu" >
            <
            div className = "menu" >
            <
            ul >
            <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            6 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            7 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            4 < /Link></li >
            <
            /ul> <
            /li> <
            /ul> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /li> <
            li className = "with-sub-menu hover" >
            <
            p className = "close-menu" > < /p> <
            p className = "open-menu" > < /p> <
            Link to = "/shop"
            className = "clearfix" > < span > < strong > {
                translate('women')
            } < /strong></span > < /Link> <
            div className = "sub-menu"
            style = {
                {
                    width: '220px'
                }
            } >
            <
            div className = "content" >
            <
            p className = "arrow" > < /p> <
            div className = "row" >
            <
            div className = "col-md-12  mobile-enabled" >
            <
            div className = "row" >
            <
            div className = "col-md-12 hover-menu" >
            <
            div className = "menu" >
            <
            ul >
            <
            li >
            <
            Link to = "/shop"
            className = "main-menu with-submenu" > {
                translate('category')
            }
            1 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul className = "" >
            <
            li >
            <
            Link to = "/shop"
            className = "with-submenu" > {
                translate('subcategory')
            }
            1 < /Link> <
            div className = "open-categories" > < /div> <
            div className = "close-categories" > < /div> <
            ul >
            <
            li > < Link to = "/shop" > Sub {
                translate('subcategory')
            }
            1 < /Link></li >
            <
            /ul> <
            /li> <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop" > {
                translate('subcategory')
            }
            3 < /Link></li >
            <
            /ul> <
            /li> <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            2 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            3 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            4 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            5 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            6 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            7 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            8 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            9 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            10 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            11 < /Link></li >
            <
            li > < Link to = "/shop"
            className = "main-menu" > {
                translate('category')
            }
            12 < /Link></li >
            <
            /ul> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /li> <
            li className = "with-sub-menu hover mobile-disabled" >
            <
            p className = "close-menu" > < /p> <
            p className = "open-menu" > < /p> <
            Link to = "/shop"
            className = "clearfix" > < span > < strong > {
                translate('children')
            } < /strong></span > < /Link> <
            div className = "sub-menu"
            style = {
                {
                    width: '900px'
                }
            } >
            <
            div className = "content" >
            <
            p className = "arrow" > < /p> <
            div className = "row" >
            <
            div className = "col-md-3  mobile-enabled" >
            <
            div className = "product" >
            <
            div className = "image" > < Link to = "/shop" > < img src = "/images/products/1.jpg"
            alt = "" / > < /Link></div >
            <
            div className = "name" > < Link to = "/shop" > Name of product < /Link></div >
            <
            div className = "price" > $110 .00 < /div> <
            /div> <
            /div> <
            div className = "col-md-3  mobile-enabled" >
            <
            div className = "product" >
            <
            div className = "image" > < Link to = "/shop" > < img src = "/images/products/2.jpg"
            alt = "" / > < /Link></div >
            <
            div className = "name" > < Link to = "/shop" > Name of product < /Link></div >
            <
            div className = "price" > $110 .00 < /div> <
            /div> <
            /div> <
            div className = "col-md-3  mobile-enabled" >
            <
            div className = "product" >
            <
            div className = "image" > < Link to = "/shop" > < img src = "/images/products/3.jpg"
            alt = "" / > < /Link></div >
            <
            div className = "name" > < Link to = "/shop" > Name of product < /Link></div >
            <
            div className = "price" > $110 .00 < /div> <
            /div> <
            /div> <
            div className = "col-md-3  mobile-enabled" >
            <
            div className = "product" >
            <
            div className = "image" > < Link to = "/shop" > < img src = "/images/products/4.jpg"
            alt = "" / > < /Link></div >
            <
            div className = "name" > < Link to = "/shop" > Name of product < /Link></div >
            <
            div className = "price" > $110 .00 < /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /li> <
            li > < Link to = "/shop"
            className = "clearfix" > < span > < strong > {
                translate('fashion')
            } < /strong></span > < /Link></li >
            <
            li > < Link to = "/shop"
            className = "clearfix" > < span > < strong > {
                translate('electronics')
            } < /strong></span > < /Link></li >
            <
            li > < Link to = "/faq"
            className = "clearfix" > < span > < strong > {
                translate('faq')
            } < /strong></span > < /Link></li >
            <
            li > < Link to = "/blog"
            className = "clearfix" > < span > < strong > {
                translate('blog')
            } < /strong></span > < /Link></li >
            <
            li className = "mobile-disabled pull-right" > < a href = "#l"
            className = "clearfix" > < span > < strong > {
                translate('buy_this_template')
            } < /strong></span > < /a></li >
            <
            /ul> <
            /div> <
            /div> <
            /div> <
            /nav>
        );
    }
}

export default withTranslate(Navigation);