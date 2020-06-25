import React from 'react'

export default function Panel(props) {
    return (
        <div className={props.alignment}>
            {props.children}
            <h5 className="deep-purple-text">{props.title}</h5>
            <p className="grey-text">{props.text}</p>
        </div>
    )
}
