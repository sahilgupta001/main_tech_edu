import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Icon, Avatar, Col, Typography } from 'antd';
import { BACKEND_URL } from '../edunomics_backend_url';
const { Title } = Typography

function PostPage(props) {
    if (!props.location.blog) {
        props.history.push("/blogs")
    }
    const [post, setPost] = useState([])

    useEffect(() => {
        setPost(props.location.blog)
    }, [])

    return (
        <div class = "container-fluid">
            <div className="postPage" style={{ width: '80%', margin: '3rem auto' }}>
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
        )
}

export default PostPage
