import React from 'react';
import {
    Link
} from 'react-router-dom';

class BlockBanners1 extends React.Component {
    render() {
        return ( <
            div className = "row banners hidden-xs" >
            <
            div className = "col-md-12" > < Link to = "/shop" > < img src = "/images/banner-01.jpg"
            alt = "Banner" / > < /Link></div >
            <
            /div>
        );
    }
}

export default BlockBanners1;