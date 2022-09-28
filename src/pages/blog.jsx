import { Button } from "@mui/material";

import FeaturedBanner from "../assets/blog-banner.png"
import "./blog.scss";

const Blog = () => {
    return(
        <section className="blog">
            <div className="banner">
                <div className="banner-img">
                    <img src={FeaturedBanner} alt="Featured Blog Banner" />
                </div>
                <div className="desc-box">
                    <div className="desc">
                        <h1>Some article title</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit thi firs last...</p>
                        <Button variant="contained">Read More</Button>
                    </div>
                </div>
            </div>
            <div className="blog-posts"></div>
        </section>
    )
}

export default Blog;