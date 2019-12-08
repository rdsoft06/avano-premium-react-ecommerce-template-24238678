import React from 'react';
import {
    Link
} from 'react-router-dom';

class BlockBanners2 extends React.Component {
    render() {
        return ( <
            div className = "row banners hidden-xs" >
            <
            div className = "col-md-4" > < Link to = "/shop" > < img src = "/images/banner-02.jpg"
            alt = "Banner" / > < /Link></div >
            <
            div className = "col-md-8" > < Link to = "/shop" > < img src = "/images/banner-03.jpg"
            alt = "Banner" / > < /Link></div >
            <
            /div>
        );
    }
}

export default BlockBanners2;