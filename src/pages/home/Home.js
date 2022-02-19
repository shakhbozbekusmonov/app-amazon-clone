import React from 'react';
import {HeaderAndMain} from "../../components/main/HeaderAndMain";
import {Footer} from "../../components/footer/Footer";
import './home.scss';
import {CartProvider} from "react-use-cart";


export const Home = () => {
    return (
        <>
            <CartProvider>
                <HeaderAndMain/>
                <Footer/>
            </CartProvider>
        </>
    );
};