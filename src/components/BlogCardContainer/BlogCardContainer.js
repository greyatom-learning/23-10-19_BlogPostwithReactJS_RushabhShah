import React, { Component } from 'react';
import './BlogCardContainer.css';

import BlogCard from './../BlogCard/BlogCard';

class BlogCardContainer extends Component {
    render() {
        let blogs = this.props.blogs.map(blog => {
            return (
                <BlogCard 
                title={blog.title}
                author={blog.author}
                cover={blog.cover_photo || null}
                synopsis={blog.synopsis}
                key={blog.id} />
            )
        })

        return (
            <div className="BlogCardContainer">
                { blogs }
            </div>
        )
    }
}

export default BlogCardContainer;