import React from "react";
import importReviews from '../../api/reviews';

// Multilanguage
import {
    withTranslate
} from 'react-redux-multilingual'

class TabReview extends React.Component {
    render() {
        const {
            translate
        } = this.props;
        var reviews = [];
        importReviews.map(review => {
            if (review.product === this.props.product_id) {
                reviews.push(review);
            }
            return false;
        });
        return ( <
            React.Fragment >
            <
            form className = "form-horizontal"
            id = "form-review" >
            <
            div id = "review" > {
                reviews.length > 0 ? ( <
                    div className = "review-list" > {
                        reviews.map((review, index) => {
                            return ( <
                                div className = "review"
                                key = {
                                    index
                                } >
                                <
                                div className = "author" > < b > {
                                    review.author
                                } < /b> <span>{review.date}</span > < /div> <
                                div className = "rating" > < i className = {
                                    review.rating > 0 ? 'fa fa-star active' : 'fa fa-star'
                                } > < /i><i className={review.rating > 1 ? 'fa fa-star active' : 'fa fa-star'}></i > < i className = {
                                    review.rating > 2 ? 'fa fa-star active' : 'fa fa-star'
                                } > < /i><i className={review.rating > 3 ? 'fa fa-star active' : 'fa fa-star'}></i > < i className = {
                                    review.rating > 4 ? 'fa fa-star active' : 'fa fa-star'
                                } > < /i></div >
                                <
                                div className = "text" > {
                                    review.review
                                } < /div> <
                                /div>
                            )
                        })
                    } <
                    /div>
                ) : ( <
                    p > {
                        translate('no_reviews')
                    } < /p>
                )
            } <
            /div> <
            h3 > {
                translate('write_a_review')
            } < /h3> <
            div className = "form-group row required" >
            <
            div className = "col-md-12" >
            <
            label className = "control-label"
            htmlFor = "input-name" > {
                translate('your_name')
            } < /label> <
            input type = "text"
            name = "name"
            id = "input-name"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            div className = "col-md-12" >
            <
            label className = "control-label"
            htmlFor = "input-review" > {
                translate('your_review')
            } < /label> <
            textarea name = "text"
            rows = "5"
            id = "input-review"
            className = "form-control" > < /textarea> <
            /div> <
            /div> <
            div className = "form-group row required" >
            <
            div className = "col-md-12" >
            <
            label className = "control-label" > {
                translate('rating')
            } < /label> &
            nbsp; & nbsp; & nbsp; {
                translate('bad')
            } & nbsp; & nbsp; <
            input type = "radio"
            name = "rating"
            defaultValue = "1" / >
            &
            nbsp; & nbsp; <
            input type = "radio"
            name = "rating"
            defaultValue = "2" / >
            &
            nbsp; & nbsp; <
            input type = "radio"
            name = "rating"
            defaultValue = "3" / >
            &
            nbsp; & nbsp; <
            input type = "radio"
            name = "rating"
            defaultValue = "4" / >
            &
            nbsp; & nbsp; <
            input type = "radio"
            name = "rating"
            defaultValue = "5" / >
            &
            nbsp; & nbsp; {
                translate('good')
            } <
            /div> <
            /div> <
            div className = "buttons clearfix" >
            <
            div className = "" >
            <
            button type = "button"
            id = "button-review"
            data - loading - text = "Loading..."
            className = "btn btn-primary" > {
                translate('continue')
            } < /button> <
            /div> <
            /div> <
            /form> <
            /React.Fragment>
        );
    }
}

export default withTranslate(TabReview);