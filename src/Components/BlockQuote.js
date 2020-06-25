import React from 'react'

const BlockQuote = ({title}) => {
    return (
        <div className="row">
        <blockquote  data-aos="fade-right"><h4>{title}</h4></blockquote>
    </div>
    )
}
export default BlockQuote