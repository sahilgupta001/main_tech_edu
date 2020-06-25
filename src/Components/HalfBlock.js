import React from 'react'

export default function HalfBlock(props) {
    return (
        <div className="col l6 s12 m12 ">
            <h5 className="deep-purple-text">{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}
