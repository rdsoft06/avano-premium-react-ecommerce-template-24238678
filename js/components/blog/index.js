import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import {
    Link
} from 'react-router-dom';
import {
    Helmet
} from 'react-helmet'

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class Blog extends React.Component {
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
            title > Avano | Blog < /title> <
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
                translate('blog')
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
            div className = "col-md-3" >
            <
            div className = "box box-with-categories" >
            <
            div className = "box-heading" > Categories < /div> <
            div className = "strip-line" > < /div> <
            div className = "box-content box-category" >
            <
            ul className = "accordion"
            id = "accordion-category" >
            <
            li className = "panel" >
            <
            Link to = "/blog"
            className = "active" > Desktops(13) < /Link> </li >
            <
            li className = "panel" >
            <
            Link to = "/blog" > Laptops & amp; Notebooks(5) < /Link></li >
            <
            li className = "panel" >
            <
            Link to = "/blog" > Components(2) < /Link></li >
            <
            li className = "panel" > < Link to = "/blog" > Tablets(1) < /Link></li >
            <
            li className = "panel" > < Link to = "/blog" > Software(0) < /Link></li >
            <
            li className = "panel" > < Link to = "/blog" > Phones & amp; PDAs(3) < /Link></li >
            <
            li className = "panel" > < Link to = "/blog" > Cameras(2) < /Link></li >
            <
            li className = "panel" >
            <
            Link to = "/blog" > MP3 Players(4) < /Link></li >
            <
            /ul> <
            /div> <
            /div> <
            /div> <
            div className = "col-md-9 center-column" >
            <
            h1 id = "title-page" > Blog < /h1> <
            div className = "bnews-list" >
            <
            div className = "artblock clearfix" >
            <
            div className = "name" > < Link to = "/post" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /Link></div >
            <
            div className = "article-meta" > Posted on 19.02 .2015 | Updated on 22.03 .2015 < /div> <
            Link to = "/post" > < img className = "article-image"
            src = "/images/blog.png"
            style = {
                {
                    float: 'left',
                    marginRight: '20px'
                }
            }
            title = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
            alt = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit." / > < /Link> <
            div className = "description" >
            <
            p > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /></p> <
            /div> <
            div className = "blog-button" > < Link to = "/post"
            className = "button" > Read More < /Link></div >
            <
            /div> <
            div className = "artblock clearfix" >
            <
            div className = "name" > < Link to = "/post" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /Link></div >
            <
            div className = "article-meta" > Posted on 19.02 .2015 | Updated on 22.03 .2015 < /div> <
            Link to = "/post" > < img className = "article-image"
            src = "/images/blog.png"
            style = {
                {
                    float: 'left',
                    marginRight: '20px'
                }
            }
            title = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
            alt = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit." / > < /Link> <
            div className = "description" >
            <
            p > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /></p> <
            /div> <
            div className = "blog-button" > < Link to = "/post"
            className = "button" > Read More < /Link></div >
            <
            /div> <
            div className = "artblock clearfix" >
            <
            div className = "name" > < Link to = "/post" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /Link></div >
            <
            div className = "article-meta" > Posted on 19.02 .2015 | Updated on 22.03 .2015 < /div> <
            Link to = "/post" > < img className = "article-image"
            src = "/images/blog.png"
            style = {
                {
                    float: 'left',
                    marginRight: '20px'
                }
            }
            title = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
            alt = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit." / > < /Link> <
            div className = "description" >
            <
            p > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /></p> <
            /div> <
            div className = "blog-button" > < Link to = "/post"
            className = "button" > Read More < /Link></div >
            <
            /div> <
            div className = "artblock clearfix" >
            <
            div className = "name" > < Link to = "/post" > Lorem ipsum dolor sit amet, consectetur adipiscing elit. < /Link></div >
            <
            div className = "article-meta" > Posted on 19.02 .2015 | Updated on 22.03 .2015 < /div> <
            Link to = "/post" > < img className = "article-image"
            src = "/images/blog.png"
            style = {
                {
                    float: 'left',
                    marginRight: '20px'
                }
            }
            title = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit."
            alt = "Lorem ipsum dolor sit amet,  consectetur adipiscing elit." / > < /Link> <
            div className = "description" >
            <
            p > Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /></p> <
            /div> <
            div className = "blog-button" > < Link to = "/post"
            className = "button" > Read More < /Link></div >
            <
            /div> <
            /div> <
            div className = "row pagination-results" >
            <
            div className = "col-md-6 text-left" > < /div> <
            div className = "col-md-6 text-right" > Showing 1 to 4 of 4(1 Pages) < /div> <
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

export default withTranslate(Blog);