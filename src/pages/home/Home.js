import React from 'react';
import {Header} from "../../components/header/Header";
import {Main} from "../../components/main/Main";
import {Footer} from "../../components/footer/Footer";
import './home.scss';

export const Home = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};