export const getNewProducts = (products, type, limit) => {
    if (type !== '' && type !== 'all') {
        var items = products.filter(product => {
            var catId = product.catId.split(",");
            if (catId.indexOf(type) > -1) {
                return true;
            } else {
                return false;
            }
        })

        items = items.sort(function(a, b) {
            var x = b.id < a.id ? -1 : 1;
            return x;
        });

        return items.slice(0, limit)
    } else {
        const items = products.sort(function(a, b) {
            var x = b.id < a.id ? -1 : 1;
            return x;
        });

        return items.slice(0, limit)
    }
}

export const getBestsellersProducts = (products, type, limit) => {
    if (type !== '' && type !== 'all') {
        var items = products.filter(product => {
            var catId = product.catId.split(",");
            if (catId.indexOf(type) > -1) {
                return true;
            } else {
                return false;
            }
        })

        items = items.sort(function(a, b) {
            var x = b.sales < a.sales ? -1 : 1;
            return x;
        });

        return items.slice(0, limit)
    } else {
        const items = products.sort(function(a, b) {
            var x = b.sales < a.sales ? -1 : 1;
            return x;
        });

        return items.slice(0, limit)
    }
}

export const getFeaturedProducts = (products, type, limit) => {
    if (type !== '' && type !== 'all') {
        var items = products.filter(product => {
            return product.featured;
        })

        items = items.filter(product => {
            var catId = product.catId.split(",");
            if (catId.indexOf(type) > -1) {
                return true;
            } else {
                return false;
            }
        })

        return items.slice(0, limit)
    } else {
        const items = products.filter(product => {
            return product.featured;
        })

        return items.slice(0, limit)
    }
}

export const getRelatedProducts = (products, product_id) => {
    var relatedProducts = '';
    products.map(product => {
        if (product.id === product_id) {
            relatedProducts = product.related_products;
        }
        return false;
    })
    relatedProducts = relatedProducts.split(',').map(function(item) {
        return parseInt(item);
    });
    var items = products.filter(product => {
        var founded = false;
        if (relatedProducts.indexOf(parseInt(product.id)) > -1) {
            founded = true;
        }
        if (founded) {
            return true;
        } else {
            return false;
        }
    })
    return items;
}

export const getCartTotalPrice = cartItems => {
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        total += parseInt(cartItems[i].qty) * cartItems[i].price;
    }
    return total;
}

export const getCartTotalItems = cartItems => {
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        total += cartItems[i].qty;
    }
    return total;
}


export const geWishlistTotalItems = wishlistItems => {
    var total = 0;
    for (var i = 0; i < wishlistItems.length; i++) {
        total += 1;
    }
    return total;
}

function filterProducts(products, filter) {
    if (filter.category > 0) {
        products = products.filter(product => {
            var categories = product.catId.split(',');
            var founded = false;
            categories.map(category => {
                if (parseInt(category) === parseInt(filter.category)) founded = true;
                return false;
            });
            if (founded) {
                return true;
            } else {
                return false;
            }
        })
    }

    if (filter.brands.length > 0) {
        products = products.filter(product => {
            var founded = false;
            filter.brands.map(brand => {
                if (brand === product.brand.id) founded = true;
                return false;
            });
            if (founded) {
                return true;
            } else {
                return false;
            }
        });
    }

    if (filter.colors.length > 0) {
        products = products.filter(product => {
            var founded = false;
            filter.colors.map(color => {
                var productColors = product.colors.split(',');
                productColors.map(productColor => {
                    if (parseInt(productColor) === parseInt(color)) founded = true;
                    return false;
                });
                return false;
            });
            if (founded) {
                return true;
            } else {
                return false;
            }
        });
    }
    return products;
}

export const getProducts = (products, filter, lang) => {
    var items = [];
    if (parseInt(filter.sort_by) === 2) {
        items = products.sort(function(a, b) {
            return a.title[lang.locale].localeCompare(b.title[lang.locale]);
        })
    } else if (parseInt(filter.sort_by) === 3) {
        items = products.sort(function(a, b) {
            return b.title[lang.locale].localeCompare(a.title[lang.locale]);
        })
    } else if (parseInt(filter.sort_by) === 4) {
        items = products.sort(function(a, b) {
            var x = b.price > a.price ? -1 : 1;
            return x;
        });
    } else if (parseInt(filter.sort_by) === 5) {
        items = products.sort(function(a, b) {
            var x = b.price < a.price ? -1 : 1;
            return x;
        });
    } else {
        items = products.sort(function(a, b) {
            var x = b.id < a.id ? -1 : 1;
            return x;
        });
    }

    items = filterProducts(items, filter);

    let show = 15;
    if (parseInt(filter.show) > 1) show = parseInt(filter.show);

    let page = 1;
    if (parseInt(filter.page) > 1) page = parseInt(filter.page);

    return items.slice((page - 1) * show, page * show)
}

export const getAllProducts = (products, filter) => {
    let items = filterProducts(products, filter);

    return items
}

export const paginationProducts = (products, filter) => {
    let items = filterProducts(products, filter);

    let show = 15;
    if (parseInt(filter.show) > 1) show = parseInt(filter.show);

    let pages = [];

    var number_of_pages = Math.ceil(items.length / show) + 1;

    for (var i = 1; i < number_of_pages; i++) {
        pages.push(i);
    }

    return pages;
}