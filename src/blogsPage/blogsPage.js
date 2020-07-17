import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Avatar, Col, Typography, Row } from 'antd';
import Icon from '@ant-design/icons';
import { BACKEND_URL } from '../edunomics_backend_url';
import { Link } from 'react-router-dom'

const { Title } = Typography
const { Meta } = Card;

function BlogPage() {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get(BACKEND_URL + '/core/blog/getPost')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.post)
                    setBlogs(response.data.post)
                } else {
                    alert('Couldnt get blog`s lists')
                }
            })
    }, [])

    const renderCards = blogs.map((blog, index) => {
        return (
            <div>
                <div className = "col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{blog.title}</h3>
                            <div className = "card-text" style={{ height: 150, overflowY: 'scroll', marginTop: 10 }}>
                                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </div>
                        </div>
                            <Link className="btn btn-dark" to={{pathname:`/view/${blog._id}`,blog:blog}} >Read this article</Link>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div>
            <div className = "container-fluid">
                <Title className = "text-center" level={2}> Blog List </Title>
                <br />
                <br />
                <div className = "row">
                    {renderCards}
                </div>
            </div>
        </div>
    )
}

export default BlogPage