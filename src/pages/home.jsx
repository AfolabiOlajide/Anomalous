import { useState, useEffect } from "react";
import { Avatar, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./home.scss";
import Coporate from "../assets/coporate-wears.png";
import MenCasuals from "../assets/men-casuals.png";
import WomenCasuals from "../assets/women-casuals.png";
import HomeHeader from "../components/homeHeader/HomeHeader";
import HomeAbout from "../components/homeAbout/HomeAbout";

const HomePage = () => {

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
		<h1 className="home">
			<HomeHeader />
			<HomeAbout />

			{/* featured product */}
			<div className="featured-product">
				<div className="container">
					<h1 className="heading">Featured Products</h1>
					<div className="featured-items">
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={MenCasuals}
									alt=""
								/>
								<div className="desc">Men Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={WomenCasuals}
									alt=""
								/>
								<div className="desc">Women Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={Coporate}
									alt=""
								/>
								<div className="desc">Coporate Wears</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={MenCasuals}
									alt=""
								/>
								<div className="desc">Men Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={WomenCasuals}
									alt=""
								/>
								<div className="desc">Women Casuals</div>
							</div>
						</Link>
						<Link to="">
							<div className="featured-item">
								<img
									className="featured-img"
									src={Coporate}
									alt=""
								/>
								<div className="desc">Coporate wears</div>
							</div>
						</Link>
					</div>
				</div>
			</div>

			{/* testimonials */}
			<div className="testimonials">
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
			</div>
		</h1>
	);
};

export default HomePage;
