import { Button } from "@mui/material";

import FeaturedBanner from "../assets/blog-banner.png"
import BlogPost from "../components/blogPost/BlogPost";
import { DummyBlogPosts } from "../dummyApi";
import "./blog.scss";


const Blog = () => {

    const Post = DummyBlogPosts.map(post => (
        <BlogPost image={post.img} description={post.description} title={post.title} />
    ))

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
            <div className="blog-posts">
                {Post}
            </div>
        </section>
    )
}

export default Blog;