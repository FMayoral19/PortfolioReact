import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image"  alt=""
            />
            <p className="card--title"><b>{props.title}</b></p>
            <p className="card--price">{props.Organization}</p>
            <p>{props.description}</p>
        </div>
    )
}