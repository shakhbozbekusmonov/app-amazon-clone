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

export const Main = () => {

    const [value, setValue] = useState(2);
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
                            {products.map((data, index) => {
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
                                                <button type="button" className="btn btn-secondary btn-block">Add To Cart</button>
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