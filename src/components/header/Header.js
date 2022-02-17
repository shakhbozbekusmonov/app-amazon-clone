import React, {useState} from "react";
import './header.scss';

export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a href="#" className="navbar-brand">
                    <img src="/images/amazon-logo.png" className="logo__brand" alt="Amazon logo"/>
                </a>

                <div className="header__location d-flex align-items-center">
                    <img src="/images/location.png" className="header__location__img" alt="Location"/>
                    <a href="#" className="map__country ml-2">
                        <p className="mb-0 text-white location__text">Delivery to</p>
                        <h6 className="mb-0 text-white location__country">Uzbekistan</h6>
                    </a>
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control header__search"
                        placeholder="Search"
                        name="search"
                    />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-warning header__search__btn">
                            <img src="/images/search.png" className="search__icon" alt="Search icon"/>
                        </button>
                    </div>
                </div>

                <div className="header__language ml-4 dropdown-toggle text-white">
                    <img src="/images/us.png" className="usa__flag" alt="USA"/>
                </div>

                <div className="header__sign-in ml-4">
                    <a href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
                       className="header__sign">
                        <p className="mb-0 text-white header__paragraph">Hello, Sign in</p>
                        <h6 className="mb-0 text-white dropdown-toggle header__account">Account & List</h6>
                    </a>
                </div>

                <div className="header__return ml-3">
                    <a href="https://www.amazon.com/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=usflex&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dnav_orders_first&pageId=webcs-yourorder&showRmrMe=1">
                        <p className="mb-0 text-white header__return__paragraph">Returns</p>
                        <h6 className="mb-0 text-white header__return__orders">& Orders</h6>
                    </a>
                </div>

                <div className="header__basket ml-3">
                    <a href="#" className="basket d-flex">
                        <img src="/images/shopping-cart.png" className="shopping__basket" alt="Shopping cart"/>
                        <h6 className="mb-0 text-white mt-3 ml-2">Cart</h6>
                    </a>
                </div>
            </nav>
        </>
    )
}