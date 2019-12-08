import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

// Layout
import HomePage from './home';

import Login from './account/login';
import Register from './account/register';
import Forgotten from './account/forgotten';
import Account from './account/account';
import Edit from './account/edit';
import Password from './account/password';
import Address from './account/address';
import AddAddress from './account/add_address';
import Order from './account/order';
import ViewOrder from './account/view_order';
import Downloads from './account/downloads';
import Return from './account/return';
import Transaction from './account/transaction';

import Shop from './shop';
import Product from './product';

import Wishlist from './wishlist';
import Compare from './compare';

import Cart from './cart';
import Checkout from './checkout';

import Blog from './blog';
import Post from './blog/post';

import ContactUs from './pages/contact_us';
import AboutUs from './pages/about_us';
import ErrorPage from './pages/404';
import Faq from './pages/faq';

const Page = () => {
    return ( <
        >
        <
        Switch >
        <
        Route path = "/"
        exact component = {
            HomePage
        }
        />

        <
        Route path = "/account/login"
        component = {
            Login
        }
        /> <
        Route path = "/account/register"
        component = {
            Register
        }
        /> <
        Route path = "/account/forgotten"
        component = {
            Forgotten
        }
        /> <
        Route path = "/account/account"
        component = {
            Account
        }
        /> <
        Route path = "/account/edit"
        component = {
            Edit
        }
        /> <
        Route path = "/account/password"
        component = {
            Password
        }
        /> <
        Route path = "/account/address"
        component = {
            Address
        }
        /> <
        Route path = "/account/add_address"
        component = {
            AddAddress
        }
        /> <
        Route path = "/account/order"
        component = {
            Order
        }
        /> <
        Route path = "/account/view_order"
        component = {
            ViewOrder
        }
        /> <
        Route path = "/account/downloads"
        component = {
            Downloads
        }
        /> <
        Route path = "/account/return"
        component = {
            Return
        }
        /> <
        Route path = "/account/transaction"
        component = {
            Transaction
        }
        />

        <
        Route path = "/shop"
        component = {
            Shop
        }
        /> <
        Route path = "/product/:id"
        component = {
            Product
        }
        />

        <
        Route path = "/wishlist"
        component = {
            Wishlist
        }
        /> <
        Route path = "/compare"
        component = {
            Compare
        }
        />

        <
        Route path = "/cart"
        component = {
            Cart
        }
        /> <
        Route path = "/checkout"
        component = {
            Checkout
        }
        />

        <
        Route path = "/blog"
        component = {
            Blog
        }
        /> <
        Route path = "/post"
        component = {
            Post
        }
        />

        <
        Route path = "/contact_us"
        component = {
            ContactUs
        }
        /> <
        Route path = "/about_us"
        component = {
            AboutUs
        }
        /> <
        Route path = "/faq"
        component = {
            Faq
        }
        />

        <
        Route component = {
            ErrorPage
        }
        /> <
        /Switch> <
        />
    );
}

export default Page;