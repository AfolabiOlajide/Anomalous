import { Button } from '@mui/material';
import React from 'react';

import './BlogPost.scss'

const BlogPost = ({image, title, description}) => {
    return (
        <section className='blogPost'>
            <div className="blogpost-img">
                <img src={image} alt="" />
            </div>
            <div className="blogpost-about">
                <h1>{title}</h1>
                <p>{description.substring(0, 300)}</p>
                <Button variant='text' >Read More</Button>
            </div>
        </section>
    )
}

export default BlogPost