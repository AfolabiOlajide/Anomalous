import { useState, useEffect } from "react";
import { Avatar, Button, Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./home.scss";
import BagImg from "../assets/about-bag.png";
import Coporate from "../assets/coporate-wears.png";
import MenCasuals from "../assets/men-casuals.png";
import WomenCasuals from "../assets/women-casuals.png";

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
			{/* header */}
			<div className="header">
				<div className="desc">
					<div className="desc-box">
						<h1 className="heading">
							An Exclusive yet affordable brand
						</h1>
						<p>
							Get high quality wears that makes you look unique
							and brings out the model in you
						</p>
						<Link to="/marketplace">
							<Button
								variant="contained"
								style={{ color: "white" }}
								className="btn"
							>
								Shop now
							</Button>
						</Link>
					</div>
				</div>
			</div>

			{/* about */}
			<div className="about">
				<div className="blue-box"></div>
				<Grid container spacing={4} className="about-box">
					<Grid item sm={6} xs={12} className="img">
						<img src={BagImg} alt="" />
					</Grid>
					<Grid item sm={6} xs={12} className="about-desc">
						<p>About us</p>
						<h2 className="heading">
							Looking for the right out fit for any event? We are
							here for you!
						</h2>
						<p>
							Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer
							took a galley. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an
							unknown printer took a galley. Lorem Ipsum has been
							the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley. <br />{" "}
							<br /> Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown
							printer took a galley. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley. Lorem Ipsum
							has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a
							galley.
						</p>
						<Link to="/about">
							<Button>Learn More</Button>
						</Link>
					</Grid>
				</Grid>
			</div>

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
