import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from './products.json';
import './main.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginRight: '50px', marginTop: '-150px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginLeft: '50px', zIndex: '99', marginTop: '-150px' }}
            onClick={onClick}
        />
    );
}

export const HeaderAndMain = (props) => {

    const [value, setValue] = useState(2);
    const [search, setSearch] = useState('');
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };

    // const data = products.json

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
                        onChange={(e) => setSearch(e.target.value)}
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
            <div className="header__slider">
                <Slider {...settings}>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" className="slider__img" alt="Error"/>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg" className="slider__img" alt="Error"/>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" className="slider__img" alt="Error"/>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" className="slider__img" alt="Error"/>
                    </div>
                </Slider>
            </div>

            <div className="main__products">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                            {products.filter((val) => {
                                if (search === "") {
                                    return val
                                } else if (val.title.toLowerCase().includes(search.toLowerCase())){
                                    return val
                                }
                            }).map((data, index) => {
                                return (
                                    <div className="col-4 mt-3">
                                        <div className="card rounded-0 h-100">
                                            <div className="card-body">
                                                <h3 className="products__title">{data.title}</h3>
                                                <img src={data.image} className="products__image w-100" alt="Error"/>
                                            </div>
                                            <div className="card-footer">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <h5 className="products__price">{data.price} $</h5>
                                                    <Box
                                                        sx={{
                                                            '& > legend': { mt: 2 },
                                                        }}
                                                    >
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                    </Box>
                                                </div>
                                                <button type="button" className="btn btn-secondary rounded-0 btn-block">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-3 mt-3">
                        <div className="card rounded-0">
                            <div className="card-body">
                                <h5 className="">Sign in for the best experience</h5>
                                <button type="button" className="btn btn-warning btn-block mb-5 mt-3">Sign in securely</button>
                            </div>
                        </div>

                        <div className="card mt-5 bg-transparent border-0">
                            <div className="card-body">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" className="w-100" alt="Error"/>
                            </div>


                            <div className="card-body mt-5 bg-white">
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg" className="w-100" alt="Error"/>
                                <h5 className="text-center mt-5 mb-4">The best website!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};