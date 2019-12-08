import React from 'react';
import {
    connect
} from "react-redux"
import ProductCard from "../shared/productCard";

// Services
import {
    getProducts
} from "../../services";

class ProductGrid extends React.Component {
    render() {
        let products = getProducts(this.props.products, this.props.filter, this.props.lang);
        return ( <
            >
            <
            div className = "row" > {
                products.map(product => {
                    return ( <
                        div className = "col-6 col-md-4 col-lg-3"
                        key = {
                            product.id
                        } >
                        <
                        ProductCard key = {
                            product.id
                        } { ...product
                        }
                        /> <
                        /div>
                    );
                })
            } <
            /div> <
            />
        );
    }
}

const mapStateToProps = (state) => ({
    lang: state.Intl,
    products: state.data.products,
    filter: state.filter
})

export default connect(
    mapStateToProps
)(ProductGrid)