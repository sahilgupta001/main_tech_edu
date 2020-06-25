import React from 'react'
import BlockQuote from '../Components/BlockQuote'

export default function SingleBlog(props) {
    
    
    const {title,subtitle,blog_content,image_url,uploadDate}=props.location.blog
    const d = new Date(uploadDate)
    return (
        <div className="container-fluid">
            <section className="section">
            <BlockQuote title={title} />
            <div className="container">
            <img alt="Blogs" src={`https://edunomics.in/api/getfile/${image_url}`} className="responsive-img" />
            </div>
            <p>Posted on{d.toDateString()}</p>
            <h4>{subtitle}</h4>
            <p>
                {blog_content}
            </p>   
            </section>
                   
        </div>
    )
}
