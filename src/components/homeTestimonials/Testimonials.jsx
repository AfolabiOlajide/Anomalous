import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./Testimonials.scss";
import MenCasuals from "../../assets/men-casuals.png";



const Testimonials = () => {

    //Setting Inner width on every window change
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    
    useEffect(() => {
        function handleResize() {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }
        window.addEventListener('resize', handleResize)
        return _ => {
        window.removeEventListener('resize', handleResize)
    }
    })


    // Setting Slides View on Inner Width Change.
    const [slidesView, setSlidesView] = useState(2);
    
    useEffect(()=>{
        slidesViewHandler()
    },[dimensions.width])

    function slidesViewHandler() {
        if (window.innerWidth < 753){
            setSlidesView(1)
            return
        }
        setSlidesView(2)
    }

    return (
        <section className="testimonials">
            <div className="container">
                <h4 className="heading">Testimonials</h4>
                <h2 className="heading">What Our Customers Say</h2>
                <div className="items">
                    <Swiper
                        slidesPerView={slidesView}
                        spaceBetween={10}
                        slidesPerGroup={2}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card className="item">
                                <CardContent>
                                    <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took
                                        a galley. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown
                                        printer took a galley.
                                    </p>
                                    <div className="customer">
                                        <Avatar
                                            src={MenCasuals}
                                            className="customer-img"
                                        />
                                        <div className="customer-info">
                                            <h5 className="name">
                                                Brentford Germain
                                            </h5>
                                            <h5 className="title">
                                                CEO of Tukeng Tikang
                                            </h5>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card className="item">
                                <CardContent>
                                    <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took
                                        a galley. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown
                                        printer took a galley.
                                    </p>
                                    <div className="customer">
                                        <Avatar
                                            src={MenCasuals}
                                            className="customer-img"
                                        />
                                        <div className="customer-info">
                                            <h5 className="name">
                                                Brentford Germain
                                            </h5>
                                            <h5 className="title">
                                                CEO of Tukeng Tikang
                                            </h5>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card className="item">
                                <CardContent>
                                    <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took
                                        a galley. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown
                                        printer took a galley.
                                    </p>
                                    <div className="customer">
                                        <Avatar
                                            src={MenCasuals}
                                            className="customer-img"
                                        />
                                        <div className="customer-info">
                                            <h5 className="name">
                                                Brentford Germain
                                            </h5>
                                            <h5 className="title">
                                                CEO of Tukeng Tikang
                                            </h5>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card className="item">
                                <CardContent>
                                    <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took
                                        a galley. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown
                                        printer took a galley.
                                    </p>
                                    <div className="customer">
                                        <Avatar
                                            src={MenCasuals}
                                            className="customer-img"
                                        />
                                        <div className="customer-info">
                                            <h5 className="name">
                                                Brentford Germain
                                            </h5>
                                            <h5 className="title">
                                                CEO of Tukeng Tikang
                                            </h5>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card className="item">
                                <CardContent>
                                    <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took
                                        a galley. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown
                                        printer took a galley.
                                    </p>
                                    <div className="customer">
                                        <Avatar
                                            src={MenCasuals}
                                            className="customer-img"
                                        />
                                        <div className="customer-info">
                                            <h5 className="name">
                                                Brentford Germain
                                            </h5>
                                            <h5 className="title">
                                                CEO of Tukeng Tikang
                                            </h5>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card className="item">
                                <CardContent>
                                    <p>
                                        Lorem Ipsum has been the industry's
                                        standard dummy text ever since the
                                        1500s, when an unknown printer took
                                        a galley. Lorem Ipsum has been the
                                        industry's standard dummy text ever
                                        since the 1500s, when an unknown
                                        printer took a galley.
                                    </p>
                                    <div className="customer">
                                        <Avatar
                                            src={MenCasuals}
                                            className="customer-img"
                                        />
                                        <div className="customer-info">
                                            <h5 className="name">
                                                Brentford Germain
                                            </h5>
                                            <h5 className="title">
                                                CEO of Tukeng Tikang
                                            </h5>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
		</section>
    )
}

export default Testimonials