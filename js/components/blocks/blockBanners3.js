import React from 'react';
import {
    Link
} from 'react-router-dom';

class BlockBanners3 extends React.Component {
    render() {
        return ( <
            div className = "row banners banners-with-padding-40" >
            <
            div className = "col-md-6" > < Link to = "/shop" > < img src = "/images/banner-04.jpg"
            alt = "Banner" / > < /Link></div >
            <
            div className = "col-md-6" > < Link to = "/shop" > < img src = "/images/banner-05.jpg"
            alt = "Banner" / > < /Link></div >
            <
            /div>
        );
    }
}

export default BlockBanners3;