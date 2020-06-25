import React from 'react'
import Heading from '../Components/Heading'
import BlockQuote from '../Components/BlockQuote'
import BlogCard from '../Components/BlogCard'

export default function CaseStudies() {
    return (
        <div className="container-fluid">
            <Heading title="Case Studies" />
            <BlockQuote title="CASE STUDIES AND PREVIOUS WORK" />
            <h5 className="deep-purple-text">We build beautiful, secure & scalable products for Startups and Enterprises.</h5>
            <p>We offer professional IT services to our clients by providing them with creative and cutting-edge design and development. Our experienced team has worked for big companies like Uber, Yahama, Samsung…. Check out the complete list of all our previous work.</p>
            <div className="row mt-5">
                <div className="col s12 l4 m6">
                    <BlogCard />
                </div>
                <div className="col s12 l4 m6">
                    <BlogCard />
                </div>
                <div className="col s12 l4 m6">
                    <BlogCard />
                </div>
            </div>
        </div>
    )
}
