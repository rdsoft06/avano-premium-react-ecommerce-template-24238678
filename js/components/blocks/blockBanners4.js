import React from 'react';
import {
    Link
} from 'react-router-dom';

class BlockBanners4 extends React.Component {
    render() {
        return ( <
            div className = "row banners banners-with-padding-40" >
            <
            div className = "col-md-12" > < Link to = "/shop" > < img src = "/images/banner-06.jpg"
            alt = "Banner" / > < /Link></div >
            <
            /div>
        );
    }
}

export default BlockBanners4;