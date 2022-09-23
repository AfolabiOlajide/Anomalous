import "./home.scss";


import HomeHeader from "../components/homeHeader/HomeHeader";
import HomeAbout from "../components/homeAbout/HomeAbout";
import FeaturedProducts from "../components/homeFeaturedProducts/FeaturedProducts";
import Testimonials from "../components/homeTestimonials/Testimonials";

const HomePage = () => {

	

	return (
		<section className="home">
			<HomeHeader />
			<HomeAbout />
			<FeaturedProducts />
			<Testimonials />			
		</section>
	);
};

export default HomePage;
